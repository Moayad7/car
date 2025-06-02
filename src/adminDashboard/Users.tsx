import React, { useEffect, useState } from "react";
import axios from "../config/axiosConfig"; // Adjust the import path as necessary

interface User {
  id: number;
  name: string;
  email: string;
  // Add other user properties as needed
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users"); // Adjust the endpoint as necessary
        setUsers(response.data);
      } catch (err) {
        setError("حدث خطأ أثناء تحميل المستخدمين");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  return (
    <div>
      <h2 className="text-xl font-bold">إدارة المستخدمين</h2>
      <table className="min-w-full mt-4 border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">الاسم</th>
            <th className="border border-gray-300 p-2">البريد الإلكتروني</th>
            {/* Add other headers as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 p-2">{user.id}</td>
              <td className="border border-gray-300 p-2">{user.name}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              {/* Add other user properties as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
