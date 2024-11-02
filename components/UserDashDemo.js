"use client"
import React, { useState } from 'react';
import { Search, Flag, Check, X, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const UserDashDemo = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  // Demo questions data
  const questions = [
    {
      id: 1,
      subject: "Clinical Diagnosis",
      question: "A 45-year-old patient presents with persistent headaches and blurred vision for the past 3 weeks. Physical examination reveals papilledema. Which of the following is the most appropriate initial diagnostic test?",
      status: "incorrect",
      flagged: true
    },
    {
      id: 2,
      subject: "Pharmacology",
      question: "Which of the following medications is most commonly associated with drug-induced lupus erythematosus?",
      status: "correct",
      flagged: false
    },
    {
      id: 3,
      subject: "Pathology",
      question: "A tissue biopsy reveals granulomas with central caseous necrosis. Which of the following conditions is most likely?",
      status: "incorrect",
      flagged: false
    }
  ];

  const stats = {
    all: questions.length,
    correct: questions.filter(q => q.status === "correct").length,
    incorrect: questions.filter(q => q.status === "incorrect").length,
    flagged: questions.filter(q => q.flagged).length
  };

  const getFilteredQuestions = () => {
    let filtered = questions;
    
    // Filter based on active tab
    if (activeTab === 'correct') {
      filtered = filtered.filter(q => q.status === 'correct');
    } else if (activeTab === 'incorrect') {
      filtered = filtered.filter(q => q.status === 'incorrect');
    } else if (activeTab === 'flagged') {
      filtered = filtered.filter(q => q.flagged);
    }
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.subject.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
        <h1 className="text-center text-4xl font-sans"> User Review Page</h1>
      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        {/* Stats and Tabs in one line */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <TabsList className="bg-gray-100">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-white"
            >
              All ({stats.all})
            </TabsTrigger>
            <TabsTrigger 
              value="correct"
              className="data-[state=active]:bg-white"
            >
              <Check className="h-4 w-4 mr-1 text-green-700" />
              Correct ({stats.correct})
            </TabsTrigger>
            <TabsTrigger 
              value="incorrect"
              className="data-[state=active]:bg-white"
            >
              <X className="h-4 w-4 mr-1 text-red-500" />
              Incorrect ({stats.incorrect})
            </TabsTrigger>
            <TabsTrigger 
              value="flagged"
              className="data-[state=active]:bg-white"
            >
              <Flag className="h-4 w-4 mr-1 text-yellow-500" />
              Flagged ({stats.flagged})
            </TabsTrigger>
          </TabsList>

          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                className="w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Questions List */}
        <TabsContent value={activeTab} className="mt-0">
          <div className="space-y-4">
            {getFilteredQuestions().map((question) => (
              <Card key={question.id} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-50 text-blue-600 text-sm rounded">
                          {question.subject}
                        </span>
                        {question.flagged && (
                          <Flag className="h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                      <p className="text-gray-700">{question.question}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {question.status === "correct" ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <br />
      <br />
      <br />
    </div>
  );
};

export default UserDashDemo;