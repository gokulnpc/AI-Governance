// import React from "react";
// import { BarChart2, LogOut } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { History } from "lucide-react";
// import { ActivityLog } from "../activity/ActivityLog";
// export const SideNavMenu: React.FC = () => {
//   const navigate = useNavigate();

//   const handleSignOut = () => {
//     navigate("/");
//   };

//   return (
//     <div className="flex flex-col h-full">
//       {/* Quick Stats Button */}
//       {/* <div className="flex-1">
//         <button
//           onClick={() => navigate("/platform/quick-stats")}
//           className="w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-1 text-gray-600 hover:bg-gray-50 transition-colors"
//         >
//           <BarChart2 className="h-4 w-4" />
//         </button>
//       </div> */}

//       {/* History */}
//       <History className="h-5 w-5" onClick={() => <ActivityLog />} />

//       {/* Sign Out Button */}
//       <button
//         onClick={handleSignOut}
//         className="flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors mt-auto"
//       >
//         <LogOut className="h-4 w-4" />
//       </button>
//     </div>
//   );
// };
import React, { useState } from "react";
import { BarChart2, LogOut, History } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ActivityLog } from "../activity/ActivityLog";

export const SideNavMenu: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignOut = () => {
    navigate("/");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Quick Stats Button */}
      {/* <div className="flex-1">
        <button
          onClick={() => navigate("/platform/quick-stats")}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-1 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <BarChart2 className="h-4 w-4" />
        </button>
      </div> */}

      {/* History */}
      <History className="h-5 w-5" />

      {/* Sign Out Button */}
      <button
        onClick={handleSignOut}
        className="flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors mt-auto"
      >
        <LogOut className="h-4 w-4" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <button onClick={toggleModal} className="text-red-600">
              Close
            </button>
            <ActivityLog />
          </div>
        </div>
      )}
    </div>
  );
};
