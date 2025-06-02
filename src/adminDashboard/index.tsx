import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar"; // Assuming you have a Sidebar component
import { Button } from "@/components/ui/button";
import { Users, Car, Store, Earth } from "lucide-react"; // Import icons from lucide-react
import Sidebar from "./Sidebar";

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("users");

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold">لوحة التحكم</h2>
        </div>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4">لوحة التحكم</h1>
            <div className="flex items-center">
                <Earth/>
                <Link
                    to="/"
                    target="_blank"
                    className="px-2 py-2 text-sm font-medium text-foreground/80 hover:text-syria-terracotta transition-colors"
                >
                    
                    زيارة الموقع
                </Link>
            </div>
            
        </div>
        
        <Outlet /> {/* This will render the selected content based on the route */}
      </div>
    </div>
  );
};

export default AdminDashboard;
