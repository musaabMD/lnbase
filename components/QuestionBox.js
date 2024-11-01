'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  BookmarkPlus,
  BookmarkCheck,
  Menu,
  MessageSquare,
  PauseCircle,
  XCircle
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const questions = [
  // Sample questions and details go here...
]

export default function QuestionBox() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [bookmarked, setBookmarked] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(900) // 15 minutes in seconds
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
  }

  const handleAnswerSelect = (answerId) => {
    setSelectedAnswer(answerId)
  }

  const handleNavigation = (direction) => {
    if (direction === 'next' && currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer('')
    } else if (direction === 'prev' && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-blue-800 text-white p-2 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Questions</SheetTitle>
              </SheetHeader>
              <div className="grid gap-2 mt-4">
                {questions.map((q, idx) => (
                  <Button
                    key={q.id}
                    variant={currentQuestion === idx ? "secondary" : "ghost"}
                    onClick={() => {
                      setCurrentQuestion(idx)
                      setSelectedAnswer('')
                    }}
                  >
                    Question {idx + 1}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <span className="font-semibold text-sm">Your Site Name {currentQuestion + 1} of {questions.length}</span>
          <span className="text-xs">Question Id: 19168</span>
        </div>
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <span className="text-xs sm:text-sm">Time: {formatTime(timeRemaining)}</span>
          <span className="bg-white text-blue-800 px-2 py-1 rounded text-xs">TIMED</span>
        </div>
        <Maximize2 className="h-5 w-5 cursor-pointer hidden sm:block" />
      </div>

      <Card className="m-2">
        <CardContent className="p-4">
          {/* Question Content */}
          <div className="space-y-4 mb-6">
            <p className="text-gray-900 leading-relaxed text-sm">
              {questions[currentQuestion].content}
            </p>
          </div>

          {/* Choices */}
          <div className="space-y-3">
            {questions[currentQuestion].choices.map((choice) => (
              <Button
                key={choice.id}
                onClick={() => handleAnswerSelect(choice.id)}
                className={`w-full justify-start text-sm p-2 h-auto ${
                  selectedAnswer && (
                    choice.correct 
                      ? 'bg-green-100 hover:bg-green-200 text-green-800 border-2 border-green-500' 
                      : choice.id === selectedAnswer 
                        ? 'bg-red-100 hover:bg-red-200 text-red-800 border-2 border-red-500'
                        : ''
                  )
                }`}
                variant="outline"
              >
                {choice.id}. {choice.text}
              </Button>
            ))}
          </div>

          {/* Explanation */}
          {selectedAnswer && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Explanation</h3>
              <p className="text-gray-900 text-sm mb-6 whitespace-pre-line">
                {questions[currentQuestion].explanation}
              </p>
              
              <h4 className="font-semibold text-base mb-3">Sources</h4>
              <div className="space-y-2">
                {questions[currentQuestion].sources.map((source, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="font-medium">{index + 1}.</span>
                    <p className="text-gray-700 text-xs">
                      {source.title} - {source.author} ({source.year}) {source.journal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-800 text-white p-2 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-2 w-full sm:w-auto justify-center  mb-2 sm:mb-0">
          <TooltipProvider>
            {/* Previous Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="secondary"
                  size="icon"
                  onClick={() => handleNavigation('prev')}
                  disabled={currentQuestion === 0}
                  className="text-blue-800"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Previous</p>
              </TooltipContent>
            </Tooltip>

            {/* Next Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="secondary"
                  size="icon"
                  onClick={() => handleNavigation('next')}
                  disabled={currentQuestion === questions.length - 1}
                  className="text-blue-800"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Next</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-between">
          <TooltipProvider>
            {/* Feedback Dialog */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" size="sm" className="text-blue-800">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Feedback
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Submit Feedback</DialogTitle>
                      <DialogDescription>
                        What would you like to report about this question?
                      </DialogDescription>
                    </DialogHeader>
                    <RadioGroup className="gap-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="typo" id="typo" />
                        <Label htmlFor="typo">Typo/Grammar Error</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="incorrect" id="incorrect" />
                        <Label htmlFor="incorrect">Incorrect Information</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unclear" id="unclear" />
                        <Label htmlFor="unclear">Unclear Question</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                    <Button className="mt-4">Submit Feedback</Button>
                  </DialogContent>
                </Dialog>
              </TooltipTrigger>
              <TooltipContent>
                <p>Feedback</p>
              </TooltipContent>
            </Tooltip>

            {/* Suspend Dialog */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" size="sm" className="text-blue-800">
                      <PauseCircle className="h-5 w-5 mr-2" />
                      Suspend
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Suspend Test</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to suspend the test? Your progress will be saved.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>Confirm</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </TooltipTrigger>
              <TooltipContent>
                <p>Suspend</p>
              </TooltipContent>
            </Tooltip>

            {/* End Block Dialog */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive" size="sm">
                      <XCircle className="h-5 w-5 mr-2" />
                      End Block
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>End Block</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to end this block? This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button variant="destructive">End Block</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </TooltipTrigger>
              <TooltipContent>
                <p>End Block</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}
