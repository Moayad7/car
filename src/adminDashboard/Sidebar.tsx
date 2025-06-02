import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Users, Car, Store } from "lucide-react"; // Import icons from lucide-react

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h2 className="text-xl font-bold">لوحة التحكم</h2>
      </div>
      <nav className="mt-4">
        <ul>
          <li>
            <Link
              to="/admin/users"
              className={`flex items-center p-2 hover:bg-gray-700 ${
                location.pathname === "/admin/users" ? "bg-gray-700" : ""
              }`}
            >
              <Users className="mx-2" />
              <span>المستخدمون</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/cars"
              className={`flex items-center p-2 hover:bg-gray-700 ${
                location.pathname === "/admin/cars" ? "bg-gray-700" : ""
              }`}
            >
              <Car className="mx-2" />
              <span>السيارات</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/stores"
              className={`flex items-center p-2 hover:bg-gray-700 ${
                location.pathname === "/admin/stores" ? "bg-gray-700" : ""
              }`}
            >
              <Store className="mx-2" />
              <span>المتاجر</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
