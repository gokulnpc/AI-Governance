// import React from "react";
// import { ArrowRight } from "lucide-react";

// interface FooterProps {
//   onDemoClick: () => void;
// }

// export const Footer: React.FC<FooterProps> = ({ onDemoClick }) => {
//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-white">
//       {/* CTA Section */}
//       <div className="bg-gradient-to-br from-blue-500 to-indigo-900 rounded-2xl relative mb-24 max-w-7xl mx-auto px-8 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-8 py-12 relative z-10">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl font-semibold text-white mb-8">
//               Ready to Secure Your AI Model Quality Data?
//             </h2>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <button
//                 onClick={onDemoClick}
//                 className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-7 py-3 rounded-xl font-semibold inline-flex items-center justify-center hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//               >
//                 Try Platform Demo{" "}
//                 <ArrowRight className="ml-3 h-5 w-5 animate-bounce" />
//               </button>
//               <a
//                 href="https://calendly.com/block-convey/demo"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white/10 backdrop-blur-md text-white px-7 py-3 rounded-xl font-semibold inline-flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20"
//               >
//                 Schedule Demo{" "}
//                 <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* Animated Background */}
//         <div className="absolute inset-0 z-0">
//           {Array.from({ length: 3 }).map((_, i) => (
//             <div
//               key={i}
//               className="absolute inset-0 opacity-30"
//               style={{
//                 background: `radial-gradient(circle at ${50 + i * 20}% ${
//                   50 + i * 10
//                 }%, rgba(124, 58, 237, 0.5), transparent 70%)`,
//                 animation: `pulse ${6 + i * 2}s ease-in-out infinite alternate`,
//               }}
//             />
//           ))}
//           <div className="absolute inset-0">
//             {Array.from({ length: 12 }).map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute rounded-full"
//                 style={{
//                   width: `${Math.random() * 10 + 5}px`,
//                   height: `${Math.random() * 10 + 5}px`,
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   background: "rgba(255, 255, 255, 0.3)",
//                   animation: `float ${
//                     Math.random() * 10 + 10
//                   }s ease-in-out infinite`,
//                   animationDelay: `${Math.random() * 5}s`,
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Footer Navigation */}
//       <div className="max-w-7xl mx-auto px-8 pb-16" />
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-900 rounded-2xl relative mb-24 max-w-7xl mx-auto px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-white mb-8">
              Ready to Secure Your AI Model Quality Data?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => navigate("/signup")}
                className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-7 py-3 rounded-xl font-semibold inline-flex items-center justify-center hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Try Platform Demo{" "}
                <ArrowRight className="ml-3 h-5 w-5 animate-bounce" />
              </button>
              <a
                href="https://calendly.com/block-convey/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md text-white px-7 py-3 rounded-xl font-semibold inline-flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Schedule Demo{" "}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(circle at ${50 + i * 20}% ${
                  50 + i * 10
                }%, rgba(124, 58, 237, 0.5), transparent 70%)`,
                animation: `pulse ${6 + i * 2}s ease-in-out infinite alternate`,
              }}
            />
          ))}
          <div className="absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: "rgba(255, 255, 255, 0.3)",
                  animation: `float ${
                    Math.random() * 10 + 10
                  }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Footer Navigation */}
      <div className="max-w-7xl mx-auto px-8 pb-16" />
    </div>
  );
};
