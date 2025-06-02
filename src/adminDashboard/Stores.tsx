import React, { useEffect, useState } from "react";
import axios from "../config/axiosConfig"; // Adjust the import path as necessary

interface Store {
  id: number;
  name: string;
  location: string;
  owner: string;
  // Add other store properties as needed
}

const Stores: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get("/api/dashboard/stores"); // Adjust the endpoint as necessary
        setStores(response.data);
      } catch (err) {
        setError("حدث خطأ أثناء تحميل المتاجر");
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  return (
    <div>
      <h2 className="text-xl font-bold">إدارة المتاجر</h2>
      <table className="min-w-full mt-4 border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">اسم المتجر</th>
            <th className="border border-gray-300 p-2">الموقع</th>
            <th className="border border-gray-300 p-2">المالك</th>
            {/* Add other headers as needed */}
          </tr>
        </thead>
        <tbody>
          {stores.map((store) => (
            <tr key={store.id}>
              <td className="border border-gray-300 p-2">{store.id}</td>
              <td className="border border-gray-300 p-2">{store.name}</td>
              <td className="border border-gray-300 p-2">{store.location}</td>
              <td className="border border-gray-300 p-2">{store.owner}</td>
              {/* Add other store properties as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stores;
