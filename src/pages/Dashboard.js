import React, { useState } from "react";
        import UserTable from "../components/UserManagement/UserTable";
        import RoleTable from "../components/RoleManagement/RoleTable";
        
        function Dashboard() {
          const [activeTab, setActiveTab] = useState("users");
        
          return (
            <div className="dashboard flex">
              {/* Sidebar */}
              <nav className="dashboard-sidebar w-1/4 bg-gray-800 text-white h-screen p-4">
                <ul className="space-y-4">
                  <li>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg font-semibold ${
                        activeTab === "users" ? "bg-blue-500" : "hover:bg-gray-700"
                      }`}
                      onClick={() => setActiveTab("users")}
                    >
                      User Management
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg font-semibold ${
                        activeTab === "roles" ? "bg-green-500" : "hover:bg-gray-700"
                      }`}
                      onClick={() => setActiveTab("roles")}
                    >
                      Role Management
                    </button>
                  </li>
                </ul>
              </nav>
        
              {/* Main Content */}
              <div className="dashboard-content flex-1 p-6">
                {activeTab === "users" ? <UserTable /> : <RoleTable />}
              </div>
            </div>
          );
        }
        
        export default Dashboard;
        
        