"use client"
import { Suspense } from 'react';
import { 
  CheckCircle, 
  Shield, 
  Database, 
  Users, 
  Play, 
  Mail,
  FileSpreadsheet,
  Tags,
  BookOpen,
  Search,
  DollarSign,
  Layout
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RevenueCalculator from './reve';
const LandingPage = () => {
  const features = [
    { 
      title: 'Complete Test Prep Solution',
      icon: CheckCircle,
      description: 'Full-featured platform for test preparation business'
    },
    { 
      title: 'Content Protection',
      icon: Shield,
      description: 'Prevent unauthorized sharing and copying of content'
    },
    { 
      title: 'Question Bank Management',
      icon: Database,
      description: 'Easily add and update your question database'
    },
    { 
      title: 'Subscription Management',
      icon: Users,
      description: 'Add and manage user access with ease'
    },
    { 
      title: 'Free Demo Access',
      icon: Play,
      description: 'Let users try before they buy'
    },
    { 
      title: 'Lead Generation',
      icon: Mail,
      description: 'Built-in email collection tools'
    },
    { 
      title: 'Multiple Exam Creation',
      icon: FileSpreadsheet,
      description: 'Create unlimited number of exams'
    },
    { 
      title: 'Organized Content',
      icon: Tags,
      description: 'Structured qBank with sections and tags'
    },
    { 
      title: 'Dual Mode Learning',
      icon: BookOpen,
      description: 'Study mode and exam mode options'
    },
    { 
      title: 'Advanced Features',
      icon: Search,
      description: 'Bookmarking, search, and progress tracking'
    },
    { 
      title: '100% Revenue',
      icon: DollarSign,
      description: 'No revenue sharing - keep all your earnings'
    },
    { 
      title: 'Simple Interface',
      icon: Layout,
      description: 'Clean and intuitive website design'
    }
  ];

  const demoButtons = [
    { title: "Exam Interface", description: "Take a sample quiz", icon: "📝", link: "/exam" }
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">Lnkbase</span>
              </div>
              <div className="flex items-center">
                <a 
                  href="https://tally.so/r/wgNrl4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                >
                  Get Early Access
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 tracking-tight leading-tight mb-8">
              Build your own Test Prep Business
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Lnkbase is an advanced quiz management&apos;s greatest hits &mdash; all simplified, refined, 
              and integrated into an organized, easy-to-use platform.
            </p>

            {/* Early Access Button */}
            <div className="max-w-lg mx-auto mb-12">
              <a 
                href="https://tally.so/r/wgNrl4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium transform hover:scale-105 transition-all text-lg"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div id="features" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">What&apos;s included? Absolutely everything.</h2>
          
          {/* Features List - New Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-[#e5e9e9] rounded-lg p-6 flex items-start gap-4 transform hover:scale-105 transition-all hover:shadow-lg"
                >
                  <div className="bg-white rounded-full p-2 shrink-0">
                    <IconComponent className="h-6 w-6 text-[#1f1e1a]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-gray-900">{feature.title}</span>
                    <span className="text-sm text-gray-700 mt-1">{feature.description}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Try It Section */}
          <section id="try-it" className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                  Try Lnkbase Demo
                </h2>
                <p className="text-gray-600 text-lg">
                  Experience the power of Lnkbase firsthand with our interactive demos
                </p>
              </div>

              <div className="flex justify-center">
                {demoButtons.map((button) => (
                  <Card 
                    key={button.title} 
                    className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 max-w-sm"
                  >
                    <CardContent className="p-6">
                      <a href={button.link} target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="ghost" 
                          className="w-full h-auto flex flex-col items-center gap-3 p-6 hover:bg-green-50 transition-colors"
                        >
                          <span className="text-4xl mb-2 transform group-hover:scale-110 transition-transform">
                            {button.icon}
                          </span>
                          <span className="font-semibold text-lg text-gray-900 group-hover:text-green-700">
                            {button.title}
                          </span>
                          <span className="text-sm text-gray-600">
                            {button.description}
                          </span>
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </section>
          <RevenueCalculator/>

        </div>
      </div>
    </Suspense>
  );
};

export default LandingPage;