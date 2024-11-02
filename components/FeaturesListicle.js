// "use client";

// import { useState, useEffect, useRef } from "react";

// // List of features to display:
// // - name: name of the feature
// // - description: description of the feature (can be any JSX)
// // - svg: icon of the feature
// const features = [
//   {
//     name: "Emails",
//     description: (
//       <>
//         <ul className="space-y-1">
//           {[
//             "Send transactional emails",
//             "DNS setup to avoid spam folder (DKIM, DMARC, SPF in subdomain)",
//             "Webhook to receive & forward emails",
//           ].map((item) => (
//             <li key={item} className="flex items-center gap-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-[18px] h-[18px] inline shrink-0 opacity-80"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                   clipRule="evenodd"
//                 />
//               </svg>

//               {item}
//             </li>
//           ))}
//           <li className="flex items-center gap-3 text-accent font-medium">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="w-[18px] h-[18px] inline shrink-0"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Time saved: 2 hours
//           </li>
//         </ul>
//       </>
//     ),
//     svg: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-8 h-8"
//       >
//         <path
//           strokeLinecap="round"
//           d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Payments",
//     description: (
//       <>
//         <ul className="space-y-2">
//           {[
//             "Create checkout sessions",
//             "Handle webhooks to update user's account",
//             "Tips to setup your account & reduce chargebacks",
//           ].map((item) => (
//             <li key={item} className="flex items-center gap-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-[18px] h-[18px] inline shrink-0 opacity-80"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                   clipRule="evenodd"
//                 />
//               </svg>

//               {item}
//             </li>
//           ))}
//           <li className="flex items-center gap-3 text-accent font-medium">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="w-[18px] h-[18px] inline shrink-0"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Time saved: 2 hours
//           </li>
//         </ul>
//       </>
//     ),
//     svg: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-8 h-8"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Login",
//     description: (
//       <>
//         <ul className="space-y-2">
//           {[
//             "Magic links setup",
//             "Login with Google walkthrough",
//             "Save user data in MongoDB",
//             "Private/protected pages & API calls",
//           ].map((item) => (
//             <li key={item} className="flex items-center gap-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-[18px] h-[18px] inline shrink-0 opacity-80"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                   clipRule="evenodd"
//                 />
//               </svg>

//               {item}
//             </li>
//           ))}
//           <li className="flex items-center gap-3 text-accent font-medium">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="w-[18px] h-[18px] inline shrink-0"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Time saved: 3 hours
//           </li>
//         </ul>
//       </>
//     ),
//     svg: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-8 h-8"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Database",
//     description: (
//       <>
//         <ul className="space-y-2">
//           {["Mongoose schema", "Mongoose plugins to make your life easier"].map(
//             (item) => (
//               <li key={item} className="flex items-center gap-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   className="w-[18px] h-[18px] inline shrink-0 opacity-80"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                     clipRule="evenodd"
//                   />
//                 </svg>

//                 {item}
//               </li>
//             )
//           )}
//           <li className="flex items-center gap-3 text-accent font-medium">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="w-[18px] h-[18px] inline shrink-0"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Time saved: 2 hours
//           </li>
//         </ul>
//       </>
//     ),
//     svg: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-8 h-8"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "SEO",
//     description: (
//       <>
//         <ul className="space-y-2">
//           {[
//             "All meta tags to rank on Google",
//             "OpenGraph tags to share on social media",
//             "Automated sitemap generation to fasten Google indexing",
//             "Structured data markup for Rich Snippets",
//             "SEO-optimized UI components",
//           ].map((item) => (
//             <li key={item} className="flex items-center gap-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-[18px] h-[18px] inline shrink-0 opacity-80"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                   clipRule="evenodd"
//                 />
//               </svg>

//               {item}
//             </li>
//           ))}
//           <li className="flex items-center gap-3 text-accent font-medium">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="w-[18px] h-[18px] inline shrink-0"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Time saved: 6 hours
//           </li>
//         </ul>
//       </>
//     ),
//     svg: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-8 h-8"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Style",
//     description: (
//       <>
//         <ul className="space-y-2">
//           {[
//             "Components, animations & sections (like the pricing page below)",
//             "20+ themes with daisyUI",
//             "Automatic dark mode",
//           ].map((item) => (
//             <li key={item} className="flex items-center gap-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-[18px] h-[18px] inline shrink-0 opacity-80"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                   clipRule="evenodd"
//                 />
//               </svg>

//               {item}
//             </li>
//           ))}
//           <li className="flex items-center gap-3 text-accent font-medium">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="w-[18px] h-[18px] inline shrink-0"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Time saved: 5 hours
//           </li>
//         </ul>
//       </>
//     ),
//     svg: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-8 h-8"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
//         />
//       </svg>
//     ),
//   },
// ];

// // A list of features with a listicle style.
// // - Click on a feature to display its description.
// // - Good to use when multiples features are available.
// // - Autoscroll the list of features (optional).
// const FeaturesListicle = () => {
//   const featuresEndRef = useRef(null);
//   const [featureSelected, setFeatureSelected] = useState(features[0].name);
//   const [hasClicked, setHasClicked] = useState(false);

//   // (Optional) Autoscroll the list of features so user know it's interactive.
//   // Stop scrolling when user scroll after the featuresEndRef element (end of section)
//   // emove useEffect is not needed.
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!hasClicked) {
//         const index = features.findIndex(
//           (feature) => feature.name === featureSelected
//         );
//         const nextIndex = (index + 1) % features.length;
//         setFeatureSelected(features[nextIndex].name);
//       }
//     }, 5000);

//     try {
//       // stop the interval when the user scroll after the featuresRef element
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             console.log("STOP AUTO CHANGE");
//             clearInterval(interval);
//           }
//         },
//         {
//           root: null,
//           rootMargin: "0px",
//           threshold: 0.5,
//         }
//       );
//       if (featuresEndRef.current) {
//         observer.observe(featuresEndRef.current);
//       }
//     } catch (e) {
//       console.error(e);
//     }

//     return () => clearInterval(interval);
//   }, [featureSelected, hasClicked]);

//   return (
//     <section className="py-24" id="features">
//       <div className="max-w-3xl mx-auto">
//         <div className="bg-base-100 max-md:px-8 max-w-3xl">
//           <p className="text-accent font-medium text-sm font-mono mb-3">
//             const launch_time = &quot;Today&quot;;
//           </p>
//           <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-8">
//             {/* 💡 COPY TIP: Remind visitors about the value of your product. Why do they need it? */}
//             Supercharge your app instantly, launch faster, make $
//           </h2>
//           <div className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
//             {/* 💡 COPY TIP: Explain how your product delivers what you promise in the headline. */}
//             Login users, process payments and send emails at lightspeed. Spend
//             your time building your startup, not integrating APIs. ShipFast
//             provides you with the boilerplate code you need to launch, FAST.
//           </div>
//         </div>
//       </div>

//       <div>
//         <div className="grid grid-cols-4 md:flex justify-start gap-4 md:gap-12 max-md:px-8 max-w-3xl mx-auto mb-8">
//           {features.map((feature) => (
//             <span
//               key={feature.name}
//               onClick={() => {
//                 if (!hasClicked) setHasClicked(true);
//                 setFeatureSelected(feature.name);
//               }}
//               className={`flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-200 group`}
//             >
//               <span
//                 className={`duration-100 ${
//                   featureSelected === feature.name
//                     ? "text-primary"
//                     : "text-base-content/30 group-hover:text-base-content/50"
//                 }`}
//               >
//                 {feature.svg}
//               </span>
//               <span
//                 className={`font-semibold text-sm ${
//                   featureSelected === feature.name
//                     ? "text-primary"
//                     : "text-base-content/50"
//                 }`}
//               >
//                 {feature.name}
//               </span>
//             </span>
//           ))}
//         </div>
//         <div className="bg-base-200">
//           <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
//             <div
//               className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity"
//               key={featureSelected}
//             >
//               <h3 className="font-semibold text-base-content text-lg">
//                 {features.find((f) => f.name === featureSelected)["name"]}
//               </h3>

//               {features.find((f) => f.name === featureSelected)["description"]}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Just used to know it's the end of the autoscroll feature (optional, see useEffect) */}
//       <p className="opacity-0" ref={featuresEndRef}></p>
//     </section>
//   );
// };

// export default FeaturesListicle;
"use client"
import React from 'react';

// const FeatureCard = ({ icon, title, description, bgColor }) => (
//   <div className={`${bgColor} rounded-xl p-8 text-white`}>
//     <div className="flex items-center gap-2 mb-2">
//       {icon}
//       <h3 className="text-xl font-semibold">{title}</h3>
//     </div>
//     <p className="text-white/90">{description}</p>
//   </div>
// );

// const FeatureList = () => {
//   const features = [
//     {
//       icon: <span className="text-2xl">🔄</span>,
//       title: "AI-Powered Quiz Generation",
//       description: "Submit your topic and let our AI create engaging quizzes instantly, with perfect difficulty balance.",
//       bgColor: "bg-purple-600"
//     },
//     {
//       icon: <span className="text-2xl">⚡</span>,
//       title: "Lightning Fast Payments",
//       description: "Seamless Bitcoin Lightning Network integration for instant micropayments.",
//       bgColor: "bg-blue-600"
//     },
//     {
//       icon: <span className="text-2xl">✏️</span>,
//       title: "Full Featured Editor",
//       description: "Customize your quizzes with our intuitive editor. Add images, format text, and more.",
//       bgColor: "bg-emerald-600"
//     },
//     {
//       icon: <span className="text-2xl">📊</span>,
//       title: "Advanced Analytics",
//       description: "Track performance, understand user behavior, and optimize your content with detailed insights.",
//       bgColor: "bg-orange-600"
//     }
//   ];

//   return (
//     <div className="py-24 bg-black">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             Everything you need to create
//             <span className="block">engaging quizzes</span>
//           </h2>
//           <p className="text-xl text-white max-w-2xl mx-auto">
//             Powerful features to help you generate, manage, and monetize your quiz content
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//           {features.map((feature, index) => (
//             <div key={index} className="transform transition-transform duration-300 hover:scale-[1.02]">
//               <FeatureCard {...feature} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Decorative background elements */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
//           <svg
//             className="absolute inset-0 h-full w-full"
//             aria-hidden="true"
//           >
//             <defs>
//               <pattern
//                 id="e813992c-7d03-4cc4-a2bd-151760b470a0"
//                 width={200}
//                 height={200}
//                 x="50%"
//                 y={-1}
//                 patternUnits="userSpaceOnUse"
//               >
//                 <path d="M100 200V.5M.5 .5H200" fill="none" />
//               </pattern>
//             </defs>
//             <rect
//               width="100%"
//               height="100%"
//               strokeWidth={0}
//               fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureList;

export default function Example() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Everything you need to deploy your app
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover object-center"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6">{/* Your code example */}</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
