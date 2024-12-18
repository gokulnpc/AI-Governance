import React from "react";
import { Shield, ArrowRight, AlertTriangle } from "lucide-react";
import MonitoringDashboard from "./MonitoringDashboard";
interface HeroProps {
  onDemoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          {/* Left Column */}
          <div className="flex-1 max-w-2xl pt-8">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-6">
              AI Governance Monitor
            </h1>
            <div className="flex items-center gap-2 text-blue-600 mb-8">
              <Shield className="h-6 w-6 animate-pulse" />
              <span className="font-semibold">Powered by Block Convey</span>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Enterprise-grade AI governance platform with blockchain-verified
              monitoring. Protect your AI investments with real-time bias
              detection, compliance tracking, and comprehensive risk management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onDemoClick}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                Try Platform Demo <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="#"
                className="text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                Request Enterprise Demo
              </a>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex-1 max-w-2xl pt-8">
            <MonitoringDashboard />
          </div>
        </div>

        <div className="bg-red-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-red-800 flex items-center justify-center gap-2">
            <AlertTriangle className="h-6 w-6" />
            Recent AI Governance Failures
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow transform hover:-translate-y-1 transition-transform duration-300">
              <div className="font-semibold text-gray-900">Hello Digit</div>
              <div className="text-red-600 font-bold">$2.7M Fine</div>
              <div className="text-sm text-gray-600 mt-1">
                2022: Algorithm-caused overdraft fees despite promises
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow transform hover:-translate-y-1 transition-transform duration-300">
              <div className="font-semibold text-gray-900">
                Townstone Financial
              </div>
              <div className="text-red-600 font-bold">$105K Fine</div>
              <div className="text-sm text-gray-600 mt-1">
                2024: Discriminatory lending practices
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow transform hover:-translate-y-1 transition-transform duration-300">
              <div className="font-semibold text-gray-900">
                Major Credit Card Provider
              </div>
              <div className="text-red-600 font-bold">Gender Bias</div>
              <div className="text-sm text-gray-600 mt-1">
                2019: Discriminatory credit limit algorithms
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
