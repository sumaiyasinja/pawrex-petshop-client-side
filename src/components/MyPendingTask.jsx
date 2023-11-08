import { useState } from "react";

const MyPendingTask = ({booking}) => {

    const [selectedStatus, setSelectedStatus] = useState('');

//   const handleStatusChange = (e) => {
    // const newStatus = e.target.value;
    // setSelectedStatus(newStatus);
    // onStatusChange(service._id, newStatus); 
//   };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <h2 className="text-2xl font-semibold mb-2">{booking.service_name}</h2>
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