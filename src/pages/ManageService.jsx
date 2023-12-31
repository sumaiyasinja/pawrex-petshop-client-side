import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { Helmet } from 'react-helmet';

const ManageService = () => {
  const { user } = useContext(AuthContext);
  const [myServices, setMyServices] = useState([]);
  const navigate = useNavigate();
// get
  useEffect(() => {
    axios
      .get(`https://b8a11-server-side-iota.vercel.app/services`)
      .then((res) => {
        // Filter services based on user's email
        const filteredServices = res.data.filter(
          (service) => service.service_provider.email === user.email
        );

        // Set the filtered services in the state
        setMyServices(filteredServices);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user.email]); // Include user.email in the dependency array to re-fetch data when the user changes

//   delete
const handleDelete = (id) => {

    Swal.fire({
        title: "Do you want to delete the service from the cart?",
        showDenyButton: true,
        confirmButtonText: "Delete",
        denyButtonText: `Don't Delete`
      }).then((result) => {

        if (result.isConfirmed) {
          axios
          .delete(`https://b8a11-server-side-iota.vercel.app/services/${id}`)
          .then((response) => {
            if (response.status === 200) {
              Swal.fire("Deleted!", "", "success");
              const remaining = myServices.filter((booking) => booking._id !== id);
              setMyServices(remaining);
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
    <div>
    <Helmet>
    <title>Pawrex | Manage Your Service</title>
  </Helmet>    

      <h2 className="text-4xl text-center text-teal-500 font-bold">Manage Your Service</h2>
      {/* Display your filtered services here */}
      {myServices.map((service) => (
        <div key={service._id}>
          
          <div className="flex flex-col max-w-3xl mx-auto p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-800">
            <ul className="flex flex-col divide-y divide-gray-300">
              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                    src={service?.service_image}
                    alt={service?.service_name}
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold leading-tight sm:pr-8">
                          {service.service_name}
                        </h3>
                        <p className="text-sm text-gray-600">Details:  {service?.service_description}</p>
                        <p className="text-sm text-gray-600">Area:  {service?.service_area}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">
                          {service?.service_price}
                        </p>
                        {/* <p className="text-sm line-through text-gray-400">
                          80.50$
                        </p> */}
                      </div>
                    </div>
                    <div className="flex text-sm divide-x">
                      <div></div>
                      <button
                        onClick={() =>
                          navigate(`/updateService/${service._id}`)

                        }
                        type="button"
                        className="flex items-center px-2 py-1 space-x-1"
                      >
                        <svg
                          className="w-4 h-4 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z"></path>
                        </svg>
                        <span>Update</span>
                      </button>
                      <button
                                          onClick={() => handleDelete(service?._id)}

                        type="button"
                        className="flex items-center px-2 py-1 pl-0 space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                          <rect width="32" height="200" x="168" y="216"></rect>
                          <rect width="32" height="200" x="240" y="216"></rect>
                          <rect width="32" height="200" x="312" y="216"></rect>
                          <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                      </button>
                     
                    </div>
                  </div>
                </div>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
