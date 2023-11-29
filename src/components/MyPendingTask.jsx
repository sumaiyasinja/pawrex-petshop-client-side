import axios from "axios";
import { Label, Select } from "flowbite-react";
import Swal from "sweetalert2";
import Service from "./Service";

const MyPendingTask = ({ booking }) => {
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const status = form.status.value;
    const name = booking?.service_name;

    const updatedStatus = { status, name };
    console.log("myBooking update:", updatedStatus);

    Swal.fire({
      title: "Do you want to update the service from the cart?",
      showDenyButton: true,
      confirmButtonText: "Update status",
      denyButtonText: `Don't Update`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`https://b8a11-server-side-iota.vercel.app/myprod/${booking._id}`, updatedStatus)
          .then((response) => {
            if (response.status === 200) {
              Swal.fire("Updated!", "Booking changed", "success");
            }
          })
          .catch((error) => {
            Swal.fire("Failed: " + error.message);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not applied");
      }
    });
  };

  return (
    <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-800">
      <ul className="flex flex-col divide-y divide-gray-300">
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4">
            <img
              className="flex-shrink-0 object-cover rounded-full w-20 h-20 border-transparent shadow-xl hover:-translate-x-1 outline-none sm:w-32 sm:h-32 bg-gray-500"
              src={booking.service_image}
              alt={booking.service_name}
            />
            <div className="flex flex-col justify-between w-full pb-4">
              <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold leading-tight sm:pr-8">
                    {booking?.service_name}
                  </h3>
                  <p className="text-sm text-gray-600">Date: {booking?.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">{booking?.service_price}</p>
                  <p className="text-sm line-through text-gray-400">80.50$</p>
                </div>
              </div>
              <div className="flex text-sm divide-x">
                <form onSubmit={handleUpdate} className="max-w-md py-2">
                  <div className="mb-2 flex gap-2 text-teal-500 items-center">
                    <Label htmlFor="countries" value="Please update user's booking cart Status" />
                  </div>
                  <Select id="countries" name="status" required defaultValue={booking?.status}>
                    <option>Pending</option>
                    <option>In progress</option>
                    <option>Completed</option>
                  </Select>
                  <button type="submit" className=" rounded-xl hover:bg-green-600 text-white bg-teal-500  flex items-center px-3 py-1 my-3 space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                    </svg>
                  <span>  Update</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default MyPendingTask;
