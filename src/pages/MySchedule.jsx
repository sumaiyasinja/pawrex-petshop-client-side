import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import MyBooking from './myBooking';
import Swal from 'sweetalert2';
import MyPendingTask from '../components/MyPendingTask';
import { useNavigate } from 'react-router-dom';

const MySchedule = () => {
    const { user } = useContext(AuthContext);
    const [bookingCard, setBookingCard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pendingServices, setPendingServices] = useState([]);
  const navigate = useNavigate()
  console.log("my pending",pendingServices);

  // get my booked services
  useEffect(() => {
    axios
      .get(`http://localhost:5000/bookings/?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((response) => {
        setBookingCard(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user?.email]);
  

  
  
  
// delete booking data
    const handleDelete = (id) => {

        Swal.fire({
            title: "Do you want to delete the service from the cart?",
            showDenyButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Don't Delete`
          }).then((result) => {

            if (result.isConfirmed) {
              axios
              .delete(`http://localhost:5000/bookings/${id}`)
              .then((response) => {
                if (response.status === 200) {
                  Swal.fire("Deleted!", "", "success");
                  const remaining = bookingCard.filter((booking) => booking._id !== id);
                  setBookingCard(remaining);
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
        <h2 className='text-3xl font-bold  text-center text-teal-500'>Your Schedule</h2>
          <h2 className="text-xl font-semibold text-center text-teal-500">Your Bookings:</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto my-6'>
        {
          bookingCard.length !==0 ?
          bookingCard.map((booking) => (
            <MyBooking 
            handleDelete={handleDelete} 
            key={booking._id} 
            booking={booking}
            />
        ))
        :
          <div className='col-span-2 flex justify-center items-center flex-col-reverse'>
            <h2 className="text-xl font-semibold text-center text-lime-400">No booking found</h2>
        
            <img src="https://i.ibb.co/54gYZ3m/pngaaa-com-5034319.png" alt="Empty Cart Icon - Png Empty Shopping Cart Icon@pngkey.com"></img>
          </div>
          
        }
        

        </div>

        <h2 className="text-xl font-semibold text-center text-teal-500">Your Provided Services:</h2>
        <button         onClick={() => navigate('/manage')}
                        type="button"
                        className="flex items-center justify-end text-teal-400 px-2 py-1 space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                        <span>Manage you services</span>
                      </button>
 <div className='grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto my-6'>
        {/* {
          pendingServices.length !==0 ?
          pendingServices.map(booking => (
            // <MyPendingTask 
            // key={booking._id} 
            // booking={booking}></MyPendingTask>
            ))
            :
            <div className='col-span-2 flex justify-center items-center flex-col-reverse'>
            <h2 className="text-xl font-semibold text-center text-lime-400">Currently you are not providing any service</h2>
        
          </div>
          
        } */}
       

          <MyPendingTask></MyPendingTask>
        </div>
    </div>
    );
};

export default MySchedule;
