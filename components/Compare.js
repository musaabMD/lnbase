"use client"
import { useState, useEffect } from 'react';
import { Check, X, Mail, Calculator } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const ComparisonSection = () => {
  const [subscribers, setSubscribers] = useState(100);
  const [pricePerSub, setPricePerSub] = useState(49);
  const [revenue, setRevenue] = useState({ usd: 0, sar: 0 });

  useEffect(() => {
    const revenueUSD = subscribers * pricePerSub;
    setRevenue({
      usd: revenueUSD,
      sar: revenueUSD * 3.75 // SAR conversion rate
    });
  }, [subscribers, pricePerSub]);

  const features = [
    {
      category: "Core Features",
      items: [
        {
          name: "Unlimited Quizzes",
          lnkbase: true,
          competitorA: false,
          competitorB: true,
          competitorC: false,
          description: "Create as many quizzes as you need"
        },
        {
          name: "Student Analytics",
          lnkbase: true,
          competitorA: true,
          competitorB: false,
          competitorC: true,
          description: "Track student performance and progress"
        },
        {
          name: "Custom Branding",
          lnkbase: true,
          competitorA: false,
          competitorB: true,
          competitorC: false,
          description: "Add your logo and brand colors"
        }
      ]
    },
    {
      category: "Advanced Features",
      items: [
        {
          name: "AI Question Generation",
          lnkbase: true,
          competitorA: false,
          competitorB: false,
          competitorC: false,
          description: "Generate questions automatically"
        },
        {
          name: "Advanced Reports",
          lnkbase: true,
          competitorA: false,
          competitorB: true,
          competitorC: false,
          description: "Detailed insights and analytics"
        }
      ]
    },
    {
      category: "Support & Security",
      items: [
        {
          name: "24/7 Support",
          lnkbase: true,
          competitorA: false,
          competitorB: false,
          competitorC: false,
          description: "Round-the-clock assistance"
        },
        {
          name: "API Access",
          lnkbase: true,
          competitorA: true,
          competitorB: false,
          competitorC: false,
          description: "Full API integration capabilities"
        }
      ]
    }
  ];

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Revenue Calculator */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Revenue Calculator</h2>
          <p className="text-xl text-gray-600">
            Estimate your monthly revenue based on subscribers and pricing
          </p>
        </div>

        <Card className="bg-white shadow-xl border-2 border-green-100">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-medium mb-4">
                    Number of Monthly Subscribers: {subscribers}
                  </label>
                  <Slider
                    value={[subscribers]}
                    onValueChange={([value]) => setSubscribers(value)}
                    min={10}
                    max={1000}
                    step={10}
                    className="mb-2"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium mb-4">
                    Price per Subscriber: ${pricePerSub}
                  </label>
                  <Slider
                    value={[pricePerSub]}
                    onValueChange={([value]) => setPricePerSub(value)}
                    min={10}
                    max={100}
                    step={1}
                    className="mb-2"
                  />
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-600">Monthly Revenue</h3>
                    <p className="text-5xl font-bold text-green-600">
                      ${revenue.usd.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-600">Monthly Revenue (SAR)</h3>
                    <p className="text-5xl font-bold text-green-600">
                      SAR {revenue.sar.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Comparison Section */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How We Compare</h2>
          <p className="text-xl text-gray-600">
            See why Lnkbase is the preferred choice for educational institutions
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-100">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-1/3">Feature</TableHead>
                <TableHead className="text-center bg-green-50 w-1/6">Lnkbase</TableHead>
                <TableHead className="text-center w-1/6">Competitor A</TableHead>
                <TableHead className="text-center w-1/6">Competitor B</TableHead>
                <TableHead className="text-center w-1/6">Competitor C</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((category) => (
                <>
                  <TableRow className="bg-gray-50">
                    <TableCell colSpan={5} className="font-bold text-lg py-4">
                      {category.category}
                    </TableCell>
                  </TableRow>
                  {category.items.map((feature) => (
                    <TableRow key={feature.name} className="hover:bg-gray-50">
                      <TableCell className="font-medium">
                        <div>
                          <p className="font-semibold">{feature.name}</p>
                          <p className="text-sm text-gray-500">{feature.description}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-center bg-green-50">
                        {feature.lnkbase ? (
                          <Check className="h-6 w-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-600 mx-auto" />
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {feature.competitorA ? (
                          <Check className="h-6 w-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-600 mx-auto" />
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {feature.competitorB ? (
                          <Check className="h-6 w-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-600 mx-auto" />
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {feature.competitorC ? (
                          <Check className="h-6 w-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-600 mx-auto" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>

    
    <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-500">Contact</a>
              <a href="#" className="text-gray-400 hover:text-gray-500">Terms</a>
              <a href="#" className="text-gray-400 hover:text-gray-500">Privacy</a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2024 Lnkbase. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ComparisonSection;