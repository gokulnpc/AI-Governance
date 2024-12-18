import { Shield, Activity, AlertCircle } from "lucide-react";

const MonitoringDashboard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center mb-3">
            <Activity className="w-5 h-5 text-blue-600 mr-2" />
            <span className="font-semibold text-gray-900">
              Model Performance
            </span>
          </div>
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
            98.5% Compliant
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center mb-3">
            <Shield className="w-5 h-5 text-blue-600 mr-2" />
            <span className="font-semibold text-gray-900">Security Status</span>
          </div>
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
            Verified Secure
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">
            Bias Detection Metrics
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">99.2%</div>
              <div className="text-sm text-gray-600">Gender Fairness</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">98.7%</div>
              <div className="text-sm text-gray-600">Age Fairness</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">99.5%</div>
              <div className="text-sm text-gray-600">Ethnic Fairness</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center mb-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
            <span className="font-semibold text-gray-900">Recent Alerts</span>
          </div>
          <div className="text-sm text-gray-600">
            2 low priority alerts in the last 24 hours
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringDashboard;
