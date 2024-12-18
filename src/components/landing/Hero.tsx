// import React from 'react';
// import { Shield, ArrowRight, AlertTriangle, Lock } from 'lucide-react';

// interface HeroProps {
//   onDemoClick: () => void;
// }

// export const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 py-24">
//         <div className="text-center max-w-4xl mx-auto">
//           <div className="flex items-center justify-center gap-2 text-blue-600 mb-6">
//             <Shield className="h-6 w-6 animate-pulse" />
//             <span className="font-semibold">Powered by Block Convey</span>
//           </div>

//           <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
//             AI Governance Monitor
//           </h1>

//           <p className="text-xl text-gray-600 mb-8">
//             Enterprise-grade AI governance platform with blockchain-verified monitoring.
//             Protect your AI investments with real-time bias detection, compliance tracking,
//             and comprehensive risk management.
//           </p>

//           <div className="flex items-center justify-center gap-4 mb-12">
//             <button
//               onClick={onDemoClick}
//               className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-blue-700 transition-colors"
//             >
//               Try Platform Demo <ArrowRight className="ml-2 h-5 w-5" />
//             </button>
//             <a
//               href="https://calendly.com/block-convey/demo"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-blue-50 transition-colors"
//             >
//               Request Enterprise Demo
//             </a>
//           </div>

//           <div className="grid grid-cols-2 gap-8 mb-16">
//             <div className="p-6 bg-white rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
//               <div className="text-3xl font-bold text-blue-600 mb-2 animate-[counter_2s_ease-out]">1000+</div>
//               <div className="text-gray-600">Models Protected</div>
//             </div>
//             <div className="p-6 bg-white rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
//               <div className="text-3xl font-bold text-green-600 mb-2 animate-[counter_2s_ease-out]">100%</div>
//               <div className="text-gray-600">Verification Rate</div>
//             </div>
//           </div>

//           <div className="bg-red-50 p-8 rounded-xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-6 text-red-800 flex items-center justify-center gap-2">
//               <AlertTriangle className="h-6 w-6" />
//               Recent AI Governance Failures
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//               <div className="bg-white p-4 rounded-lg shadow transform hover:-translate-y-1 transition-transform duration-300">
//                 <div className="font-semibold text-gray-900">Hello Digit</div>
//                 <div className="text-red-600 font-bold">$2.7M Fine</div>
//                 <div className="text-sm text-gray-600 mt-1">
//                   2022: Algorithm-caused overdraft fees despite promises
//                 </div>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow transform hover:-translate-y-1 transition-transform duration-300">
//                 <div className="font-semibold text-gray-900">Townstone Financial</div>
//                 <div className="text-red-600 font-bold">$105K Fine</div>
//                 <div className="text-sm text-gray-600 mt-1">
//                   2024: Discriminatory lending practices
//                 </div>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow transform hover:-translate-y-1 transition-transform duration-300">
//                 <div className="font-semibold text-gray-900">Major Credit Card Provider</div>
//                 <div className="text-red-600 font-bold">Gender Bias</div>
//                 <div className="text-sm text-gray-600 mt-1">
//                   2019: Discriminatory credit limit algorithms
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 p-8 bg-blue-50 rounded-xl shadow-lg">
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <Lock className="h-8 w-8 text-blue-600 animate-float" />
//             </div>
//             <h3 className="text-xl font-semibold mb-4">Blockchain-Verified Security</h3>
//             <p className="text-gray-600">
//               Every model check, test result, and compliance verification is cryptographically
//               secured on the Block Convey network, ensuring complete accountability and trust.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroStats } from "./sections/HeroStats";
import { FailuresSection } from "./sections/FailuresSection";

interface HeroProps {
  onDemoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-blue-600 mb-6">
            <Shield className="h-6 w-6" />
            <span className="font-semibold">Powered by Block Convey</span>
          </div>

          <h1 className="text-6xl font-bold tracking-tight text-white mb-6">
            AI Governance Monitor
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Enterprise-grade AI governance platform with blockchain-verified
            monitoring. Protect your AI investments with real-time bias
            detection, compliance tracking, and comprehensive risk management.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <button
              onClick={onDemoClick}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center hover:opacity-90 transition-opacity shadow-lg"
            >
              Try Platform Demo <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <Link
              to="https://calendly.com/block-convey/demo"
              target="_blank"
              className="text-white border-2 border-white/20 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold inline-flex items-center hover:bg-white/20 transition-colors"
            >
              Request Enterprise Demo
            </Link>
          </div>

          <HeroStats />
          <FailuresSection />
        </div>
      </div>
    </div>
  );
};
