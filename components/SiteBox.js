// import React from 'react';

// // Icons remain the same
// const Icons = {
//   Book: () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
//       <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
//     </svg>
//   ),
//   Send: () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="m22 2-7 20-4-9-9-4Z"></path>
//       <path d="M22 2 11 13"></path>
//     </svg>
//   ),
//   Twitter: () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
//     </svg>
//   ),
//   MessageCircle: () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
//     </svg>
//   ),
//   Mail: () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <rect width="20" height="16" x="2" y="4" rx="2"></rect>
//       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//     </svg>
//   )
// };

// const QuizLinkTree = () => {
//   const stats = [
//     {
//       label: 'Exams',
//       value: '15+'
//     },
//     {
//       label: 'Questions',
//       value: '10,000+'
//     }
//   ];

//   const features = [
//     'Full Access to Question Bank Library',
//     'Detailed Answer Explanations',
//     'Performance Analytics Dashboard',
//     'Progress Tracking System',
//     'Mobile & Desktop Access',
//     'Regular Content Updates'
//   ];

//   const plans = [
//     {
//       duration: '1 Month',
//       price: '$29.99',
//       savings: ''
//     },
//     {
//       duration: '3 Months',
//       price: '$79.99',
//       savings: 'Save 11%'
//     },
//     {
//       duration: '6 Months',
//       price: '$149.99',
//       savings: 'Save 16%'
//     },
//     {
//       duration: '12 Months',
//       price: '$269.99',
//       savings: 'Save 25%'
//     },
//     {
//       duration: '2 Years',
//       price: '$479.99',
//       savings: 'Save 33%'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#FAFAFA] px-4 py-8 max-w-lg mx-auto">
//       {/* Profile Header */}
//       <div className="text-center mb-6">
//         <div className="w-24 h-24 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
//           <Icons.Book />
//         </div>
//         <h1 className="text-2xl font-bold mb-1">[Your App Name]</h1>
//         <p className="text-gray-600 text-sm mb-4">Expert Medical Question Banks</p>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-2 gap-3 mb-6">
//         {stats.map((stat, index) => (
//           <div key={index} className="bg-white p-4 rounded-xl shadow-sm text-center">
//             <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
//             <div className="text-sm text-gray-600">{stat.label}</div>
//           </div>
//         ))}
//       </div>

//       {/* Features List */}
//       <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
//         <h2 className="text-lg font-bold text-indigo-900 mb-4">What You'll Get:</h2>
//         <div className="space-y-3">
//           {features.map((feature, index) => (
//             <div key={index} className="flex items-center text-sm">
//               <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center mr-3 font-semibold text-xs">
//                 {index + 1}
//               </span>
//               <span className="text-gray-700">{feature}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Subscription Plans */}
//       <div className="space-y-3 mb-6">
//         {plans.map((plan, index) => (
//           <a 
//             key={index}
//             href={`#subscribe-${plan.duration.toLowerCase().replace(' ', '-')}`}
//             className="block w-full p-4 text-left bg-white rounded-xl shadow-sm border border-indigo-100 hover:bg-indigo-50 transition-colors"
//           >
//             <div className="flex justify-between items-center">
//               <div>
//                 <span className="font-semibold text-indigo-900">{plan.duration}</span>
//                 <p className="text-sm text-gray-600">{plan.price}</p>
//               </div>
//               {plan.savings && (
//                 <span className="text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded-full">
//                   {plan.savings}
//                 </span>
//               )}
//             </div>
//           </a>
//         ))}
//       </div>

//       {/* Contact & Social Links */}
//       <div className="space-y-3">
//         <a 
//           href="https://t.me/yourappname"
//           className="block w-full p-3 text-center bg-[#29B6F6] text-white rounded-xl font-medium hover:bg-[#0288D1] transition-colors"
//         >
//           <div className="flex items-center justify-center">
//             <Icons.Send />
//             <span className="ml-2">Join Telegram Community</span>
//           </div>
//         </a>

//         <a 
//           href="https://twitter.com/yourappname"
//           className="block w-full p-3 text-center bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
//         >
//           <div className="flex items-center justify-center">
//             <Icons.Twitter />
//             <span className="ml-2">Follow us on X</span>
//           </div>
//         </a>

//         <a 
//           href="https://wa.me/1234567890"
//           className="block w-full p-3 text-center bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#128C7E] transition-colors"
//         >
//           <div className="flex items-center justify-center">
//             <Icons.MessageCircle />
//             <span className="ml-2">Contact via WhatsApp</span>
//           </div>
//         </a>

//         <a 
//           href="mailto:support@yourapp.com"
//           className="block w-full p-3 text-center bg-white text-gray-700 rounded-xl font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
//         >
//           <div className="flex items-center justify-center">
//             <Icons.Mail />
//             <span className="ml-2">Email Support</span>
//           </div>
//         </a>

//         <a 
//           href="#sample"
//           className="block w-full p-3 text-center bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
//         >
//           Try Free Sample Questions
//         </a>
//       </div>

//       {/* Footer */}
//       <div className="mt-8 text-center text-sm text-gray-500">
//         <p>© 2024 [Your App Name]</p>
//         <p className="mt-1">Empowering Medical Excellence</p>
//       </div>
//     </div>
//   );
// };

// export default QuizLinkTree;