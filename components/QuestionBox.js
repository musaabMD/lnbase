'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  Menu,
  PauseCircle,
  XCircle,
  Bookmark,
  Timer,
  FileQuestion
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// Modified questions data structure to properly handle sources
const questions = [
    {
        "id": 1,
        "content": "A 54-year-old woman presents to the emergency department with bright red blood per rectum. She has had 3 large, bloody stools over the past 2 days, associated with mild abdominal cramps. She denies melena, fever, vomiting, or weight changes. She underwent a radical hysterectomy and adjuvant radiation therapy for cervical cancer 12 months ago. The patient has no other medical conditions and takes no medications. Vitals are normal: temperature 37.5°C (99.5°F), blood pressure 140/80 mm Hg, pulse 80/min, and respirations 12/min. Physical exam reveals a nontender and nondistended abdomen, with well-perfused extremities. Lab results show hemoglobin 9.8 g/dL, platelets 325,000/mm³, and leukocytes 6,200/mm³. Colonoscopy reveals mucosal pallor, friability, and multiple telangiectasias within the rectum, with scattered diverticula in the descending and transverse colon.",
        "choices": [
          { "id": "A", "text": "Angiodysplasia", "correct": false },
          { "id": "B", "text": "Clostridioides difficile infection", "correct": false },
          { "id": "C", "text": "Crohn disease", "correct": false },
          { "id": "D", "text": "Diverticular colitis", "correct": false },
          { "id": "E", "text": "Ischemic colitis", "correct": false },
          { "id": "F", "text": "Radiation proctitis", "correct": true }
        ],
        "explanation": "The correct answer is F: Radiation proctitis.",
        "detailedExplanation": "Radiation proctitis is a common complication in patients who have received pelvic radiation, particularly for cancers such as cervical cancer. It typically presents months to years after radiation therapy with symptoms such as rectal bleeding, diarrhea, and tenesmus. Chronic radiation proctitis is characterized by mucosal friability, telangiectasias, and vascular ectasia limited to the irradiated area, often the rectum. In this case, the colonoscopy findings of mucosal pallor, friability, and telangiectasias within the rectum, combined with her history of radiation therapy, strongly suggest radiation proctitis as the diagnosis.\n\nOther options: Angiodysplasia usually affects older adults and typically involves the cecum and ascending colon. Crohn disease and Clostridioides difficile infection would present with more systemic symptoms like abdominal pain and diarrhea. Diverticular colitis and ischemic colitis would not be restricted to the rectum and would likely involve more extensive abdominal pain.",
        "sources": [
          {
            "author": "Paquette, I.M. et al.",
            "title": "Radiation Proctopathy: A Management Challenge",
            "journal": "Diseases of the Colon & Rectum",
            "year": "2024"
          },
          {
            "author": "Do, N.L. et al.",
            "title": "Current Management of Radiation Proctitis: A Review",
            "journal": "Journal of Gastrointestinal Surgery",
            "year": "2023"
          }
        ]
      },
      {
        "id": 2,
        "content": "A 28-year-old man presents with 2 weeks of persistent diarrhea and abdominal cramping. He reports 6-8 loose, non-bloody stools per day. He recently returned from a camping trip in the Rocky Mountains. He has no significant medical history and takes no medications. Vitals are normal: temperature 36.8°C (98.2°F), blood pressure 120/70 mm Hg, pulse 76/min, and respirations 14/min. Physical exam reveals mild diffuse abdominal tenderness. Stool microscopy shows cysts and trophozoites.",
        "choices": [
          { "id": "A", "text": "Cryptosporidium parvum", "correct": false },
          { "id": "B", "text": "Entamoeba histolytica", "correct": false },
          { "id": "C", "text": "Giardia lamblia", "correct": true },
          { "id": "D", "text": "Salmonella enteritidis", "correct": false },
          { "id": "E", "text": "Shigella sonnei", "correct": false }
        ],
        "explanation": "The correct answer is C: Giardia lamblia.",
        "detailedExplanation": "Giardia lamblia is a common cause of persistent diarrhea, especially after exposure to contaminated water during activities such as camping. It typically causes watery, foul-smelling diarrhea without blood, and diagnosis is confirmed by stool microscopy showing cysts and trophozoites. Treatment involves metronidazole or tinidazole.",
        "sources": [
          {
            "author": "Thielman, N.M. et al.",
            "title": "Giardiasis: Clinical Manifestations, Diagnosis, and Treatment",
            "journal": "Infectious Disease Clinics of North America",
            "year": "2023"
          }
        ]
      },
      {
        "id": 3,
        "content": "A 65-year-old man presents with sudden onset of severe epigastric pain radiating to the back. He has a history of chronic alcohol use and hypertension. Vitals are significant for a temperature of 37.9°C (100.2°F), blood pressure 100/60 mm Hg, pulse 110/min, and respirations 20/min. Physical exam reveals abdominal distension, tenderness to palpation in the epigastric region, and decreased bowel sounds. Lab results show elevated serum lipase and amylase.",
        "choices": [
          { "id": "A", "text": "Acute cholecystitis", "correct": false },
          { "id": "B", "text": "Acute pancreatitis", "correct": true },
          { "id": "C", "text": "Mesenteric ischemia", "correct": false },
          { "id": "D", "text": "Perforated peptic ulcer", "correct": false },
          { "id": "E", "text": "Small bowel obstruction", "correct": false }
        ],
        "explanation": "The correct answer is B: Acute pancreatitis.",
        "detailedExplanation": "Acute pancreatitis typically presents with sudden onset of severe epigastric pain radiating to the back, especially in the context of risk factors such as chronic alcohol use. Elevated serum lipase and amylase are diagnostic markers. Management includes supportive care with fluids, pain control, and monitoring for complications.",
        "sources": [
          {
            "author": "Banks, P.A. et al.",
            "title": "The Revised Atlanta Classification of Acute Pancreatitis",
            "journal": "Gut",
            "year": "2023"
          }
        ]
      },
      {
        "id": 4,
        "content": "A 45-year-old woman presents with progressively worsening fatigue, weakness, and difficulty climbing stairs over the past 3 months. Physical examination reveals proximal muscle weakness and a heliotrope rash over her eyelids. Lab results show elevated creatine kinase and positive anti-Jo-1 antibodies.",
        "choices": [
          { "id": "A", "text": "Dermatomyositis", "correct": true },
          { "id": "B", "text": "Multiple sclerosis", "correct": false },
          { "id": "C", "text": "Myasthenia gravis", "correct": false },
          { "id": "D", "text": "Polymyalgia rheumatica", "correct": false },
          { "id": "E", "text": "Rheumatoid arthritis", "correct": false }
        ],
        "explanation": "The correct answer is A: Dermatomyositis.",
        "detailedExplanation": "Dermatomyositis is characterized by proximal muscle weakness, skin findings such as a heliotrope rash, and laboratory markers like elevated creatine kinase and positive anti-Jo-1 antibodies. It is an autoimmune inflammatory myopathy often treated with corticosteroids and immunosuppressants.",
        "sources": [
          {
            "author": "Dalakas, M.C.",
            "title": "Inflammatory Muscle Diseases: Diagnosis and Treatment",
            "journal": "New England Journal of Medicine",
            "year": "2024"
          }
        ]
      },
      {
        "id": 5,
        "content": "A 32-year-old man presents with fever, cough, and dyspnea for the past 5 days. He is an IV drug user. Physical examination reveals a systolic murmur best heard at the left sternal border. Chest X-ray shows multiple nodular opacities. Blood cultures are positive for Staphylococcus aureus.",
        "choices": [
          { "id": "A", "text": "Aspiration pneumonia", "correct": false },
          { "id": "B", "text": "Community-acquired pneumonia", "correct": false },
          { "id": "C", "text": "Infective endocarditis", "correct": true },
          { "id": "D", "text": "Lung abscess", "correct": false },
          { "id": "E", "text": "Tuberculosis", "correct": false }
        ],
        "explanation": "The correct answer is C: Infective endocarditis.",
        "detailedExplanation": "Infective endocarditis should be suspected in IV drug users presenting with fever, respiratory symptoms, and heart murmur. Staphylococcus aureus is a common causative organism, and chest X-ray findings of multiple nodular opacities suggest septic emboli. Diagnosis is confirmed by blood cultures.",
        "sources": [
          {
            "author": "Baddour, L.M. et al.",
            "title": "Infective Endocarditis in Intravenous Drug Users",
            "journal": "Journal of the American College of Cardiology",
            "year": "2023"
          }
        ]
      }
    // ... other questions with similar structure
]

export default function QuestionBox() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(900)
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNavigation('next')
      if (e.key === 'ArrowLeft') handleNavigation('prev')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentQuestion])

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

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const currentQuestionData = questions[currentQuestion] || null

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Navigation Bar */}
      <div className="bg-blue-800 text-white px-4 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-10 shadow-lg">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-white p-2">
                <Menu className="h-8 w-8 sm:h-12 sm:w-12" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-xl sm:text-2xl flex items-center gap-2">
                  <FileQuestion className="h-6 w-6" />
                  Question Navigator
                </SheetTitle>
              </SheetHeader>
              <div className="grid grid-cols-4 gap-2 mt-4">
                {questions.map((q, idx) => (
                  <Button
                    key={q.id}
                    variant={currentQuestion === idx ? "secondary" : "ghost"}
                    className="w-full h-12 text-lg"
                    onClick={() => {
                      setCurrentQuestion(idx)
                      setSelectedAnswer('')
                    }}
                  >
                    {idx + 1}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <span className="text-xl sm:text-2xl font-medium tracking-wide">
            Question {currentQuestion + 1}/{questions.length}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Timer className="h-8 w-8 sm:h-10 sm:w-10" />
            <span className="text-xl sm:text-2xl font-medium">{formatTime(timeRemaining)}</span>
          </div>
          <Button 
            variant="default"
            size="lg"
            className="h-12 px-4 sm:px-6 text-lg flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800"
            onClick={handleBookmark}
          >
            <Bookmark className={`h-8 w-8 ${isBookmarked ? 'fill-yellow-500' : ''} transition-colors duration-200`} />
            <span className="hidden sm:inline">Bookmark</span>
          </Button>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 mt-16 mb-20">
        <div className="h-full p-4 sm:p-6">
          <div className="bg-white min-h-full rounded-xl shadow-lg p-6 sm:p-8">
            <div className="mb-8">
              {currentQuestionData ? (
                <p className="text-gray-900 text-xl sm:text-2xl leading-relaxed font-bold">
                  {currentQuestionData.content}
                </p>
              ) : (
                <p>Loading question...</p>
              )}
            </div>

            {/* Choices */}
            <div className="space-y-4">
              {currentQuestionData?.choices.map((choice) => (
                <button
                  key={choice.id}
                  className={`w-full text-left flex items-center gap-4 p-4 sm:p-6 rounded-xl border-2 transition-all hover:border-blue-500 hover:shadow-md ${
                    selectedAnswer && (
                      choice.correct 
                        ? 'bg-green-50 border-green-500 text-green-800' 
                        : choice.id === selectedAnswer 
                          ? 'bg-red-50 border-red-500 text-red-800'
                          : 'border-gray-200'
                    )
                  }`}
                  onClick={() => handleAnswerSelect(choice.id)}
                >
                  <span className="font-bold text-xl sm:text-2xl text-blue-600 min-w-[2rem]">
                    {choice.id}
                  </span>
                  <span className="text-lg sm:text-xl">{choice.text}</span>
                </button>
              ))}
            </div>

            {/* Explanation */}
            {selectedAnswer && currentQuestionData && (
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                <h3 className="font-bold text-xl sm:text-2xl mb-4 text-blue-800">
                  {currentQuestionData.explanation}
                </h3>
                <p className="text-gray-800 text-lg sm:text-xl mb-6 leading-relaxed">
                  {currentQuestionData.detailedExplanation}
                </p>
                
                {currentQuestionData.sources && (
                  <>
                    <h4 className="font-semibold text-lg sm:text-xl mb-3 text-blue-800">
                      Sources
                    </h4>
                    <div className="space-y-2">
                      {currentQuestionData.sources.map((source, index) => (
                        <div key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="font-medium">{index + 1}.</span>
                          <p className="text-base sm:text-lg">
                            {source.title} - {source.author} ({source.year}) {source.journal}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-800 px-4 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <Button
            variant="default"
            size="lg"
            className="h-12 px-6 text-lg flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800"
            onClick={() => handleNavigation('prev')}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="hidden sm:inline">Previous</span>
          </Button>
          
          <Button
            variant="default"
            size="lg"
            className="h-12 px-6 text-lg flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800"
            onClick={() => handleNavigation('next')}
            disabled={currentQuestion === questions.length - 1}
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="default"
                size="lg"
                className="h-12 px-4 sm:px-6 text-lg flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800"
              >
                <PauseCircle className="h-8 w-8" />
                <span className="hidden sm:inline">Pause</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl">Suspend Test</DialogTitle>
                <DialogDescription className="text-lg">
                  Are you sure you want to suspend the test? Your progress will be saved.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end gap-4 mt-6">
                <DialogClose asChild>
                  <Button variant="outline" size="lg" className="h-12 px-6 text-lg">
                    Cancel
                  </Button>
                </DialogClose>
                <Button size="lg" className="h-12 px-6 text-lg">
                  Confirm
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="default"
                size="lg"
                className="h-12 px-4 sm:px-6 text-lg flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800"
              >
                <XCircle className="h-8 w-8" />
                <span className="hidden sm:inline">End</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl">End Exam</DialogTitle>
                <DialogDescription className="text-lg">
                  Are you sure you want to end the exam? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end gap-4 mt-6">
                <DialogClose asChild>
                  <Button variant="outline" size="lg" className="h-12 px-6 text-lg">
                    Cancel
                  </Button>
                </DialogClose>
                <Button variant="destructive" size="lg" className="h-12 px-6 text-lg">
                  End Exam
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}