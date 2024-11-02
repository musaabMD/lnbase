"use client"
import { Check, X } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const ComparisonSection = () => {
  const features = [
    {
      category: "Business Solution",
      items: [
        {
          name: "Complete Test Prep Business Solution",
          description: "Full-featured platform for test preparation business",
          lnkbase: true,
          salla: false,
          customDev: true,
          notes: "Lnkbase provides an all-in-one solution"
        },
        {
          name: "Content Protection",
          description: "Prevent copy, paste and unauthorized sharing",
          lnkbase: true,
          salla: false,
          customDev: true,
          notes: "Secure content delivery system"
        },
        {
          name: "No Revenue Sharing",
          description: "Keep 100% of your earnings",
          lnkbase: true,
          salla: false,
          customDev: true,
          notes: "Collect full amount from your sales"
        }
      ]
    },
    {
      category: "Content Management",
      items: [
        {
          name: "Question Bank Management",
          description: "Add and update questions easily",
          lnkbase: true,
          salla: false,
          customDev: true,
          notes: "Complete qBank management system"
        },
        {
          name: "Multiple Exam Creation",
          description: "Create unlimited number of exams",
          lnkbase: true,
          salla: false,
          customDev: true,
          notes: "Create as many exams as needed"
        },
        {
          name: "Organized QBank",
          description: "Sections, tags, and structured content",
          lnkbase: true,
          salla: false,
          customDev: true,
          notes: "Well-organized question management"
        }
      ]
    },
    {
      category: "User Experience",
      items: [
        {
          name: "Study & Exam Modes",
          description: "Different modes for learning and testing",
          lnkbase: true,
          salla: false,
          customDev: false,
          notes: "Flexible learning options"
        },
        {
          name: "Advanced Features",
          description: "Bookmarking, search, used questions tracking",
          lnkbase: true,
          salla: false,
          customDev: false,
          notes: "Enhanced user experience features"
        },
        {
          name: "Free Demo Access",
          description: "Try before you buy option",
          lnkbase: true,
          salla: false,
          customDev: false,
          notes: "Risk-free trial available"
        }
      ]
    },
    {
      category: "Business Management",
      items: [
        {
          name: "Subscription Management",
          description: "Add/disable users, manage subscriptions",
          lnkbase: true,
          salla: false,
          customDev: true,
          notes: "Complete user management"
        },
        {
          name: "Email Collection",
          description: "Built-in lead generation tools",
          lnkbase: true,
          salla: false,
          customDev: false,
          notes: "Grow your customer base"
        },
        {
          name: "Business Dashboard",
          description: "Complete overview of your business",
          lnkbase: true,
          salla: false,
          customDev: true,
          notes: "Comprehensive analytics"
        },
        {
          name: "24/7 Support",
          description: "Round-the-clock customer service",
          lnkbase: true,
          salla: false,
          customDev: false,
          notes: "Always available support"
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How We Compare</h2>
          <p className="text-xl text-gray-600">
            See why Lnkbase is the smartest choice for your test prep business
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-100">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-1/3">Feature</TableHead>
                <TableHead className="text-center bg-green-50 w-1/6">Lnkbase</TableHead>
                <TableHead className="text-center w-1/6">Salla.com<br/>(PDF Sales)</TableHead>
                <TableHead className="text-center w-1/6">Custom Development<br/>(High Cost)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((category) => (
                <>
                  <TableRow key={category.category} className="bg-gray-50">
                    <TableCell colSpan={4} className="font-bold text-lg py-4">
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
                        {feature.salla ? (
                          <Check className="h-6 w-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-600 mx-auto" />
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {feature.customDev ? (
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
  );
};

export default ComparisonSection;