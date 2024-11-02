"use client"
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calculator } from 'lucide-react';
import { Suspense } from 'react';
const RevenueCalculator = () => {
  const [subscribers, setSubscribers] = useState(1000);
  const [priceInSAR, setPriceInSAR] = useState(39.99);
  
  // SAR to USD conversion rate (1 SAR = 0.27 USD approximately)
  const sarToUsdRate = 0.27;
  
  // Calculate metrics
  const monthlyRevenueInSAR = subscribers * priceInSAR;
  const monthlyRevenueInUSD = monthlyRevenueInSAR * sarToUsdRate;
  const annualRevenueInSAR = monthlyRevenueInSAR * 12;
  const annualRevenueInUSD = monthlyRevenueInUSD * 12;

  return (
    <>
<Suspense>



    <div className="w-full max-w-9xl p-4 items-center">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-6 h-6" />
            Subscription Revenue Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {/* Input Section */}
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Expected Number of Subscribers
                </label>
                <Input
                  type="number"
                  value={subscribers}
                  onChange={(e) => setSubscribers(Number(e.target.value))}
                  min="0"
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Price per Subscription (SAR)
                </label>
                <Input
                  type="number"
                  value={priceInSAR}
                  onChange={(e) => setPriceInSAR(Number(e.target.value))}
                  min="0"
                  step="0.01"
                  className="w-full"
                />
              </div>
            </div>

            {/* Results Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Monthly Revenue</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    SAR: {monthlyRevenueInSAR.toLocaleString('en-US', { 
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2 
                    })}
                  </p>
                  <p className="text-sm">
                    USD: {monthlyRevenueInUSD.toLocaleString('en-US', { 
                      style: 'currency',
                      currency: 'USD'
                    })}
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Annual Revenue</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    SAR: {annualRevenueInSAR.toLocaleString('en-US', { 
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2 
                    })}
                  </p>
                  <p className="text-sm">
                    USD: {annualRevenueInUSD.toLocaleString('en-US', { 
                      style: 'currency',
                      currency: 'USD'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </Suspense>
    </>
  );
};

export default RevenueCalculator;