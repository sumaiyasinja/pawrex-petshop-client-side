import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyPendingTask = () => {
  const {user} = useContext(AuthContext)

    const [selectedStatus, setSelectedStatus] = useState('');
    const [pendingServices, setPendingServices] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:5000/myservices/?email=${user?.email}`)
        .then((response) => {
          setPendingServices(response.data);
          console.log("my provinds", response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, [user?.email]);
    console.log("testing user", typeof user.email,);

//   const handleStatusChange = (e) => {
    // const newStatus = e.target.value;
    // setSelectedStatus(newStatus);
    // onStatusChange(service._id, newStatus); 
//   };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      {/* <h2 className="text-2xl font-semibold mb-2">{booking.service_name}</h2> */}
      {/* <h2 className="text-2xl font-semibold mb-2">{service.name}</h2>
      <p className="text-gray-700">{service.description}</p>
      <div className="mt-4">
        <label htmlFor="status" className="block text-sm font-semibold text-gray-600 mb-1">
          Status:
        </label>
        <select
          id="status"
          value={selectedStatus}
          onChange={handleStatusChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div> */}
    </div>
  );
};
export default MyPendingTask;