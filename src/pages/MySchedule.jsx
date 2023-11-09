import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import MyBooking from './myBooking';
import Swal from 'sweetalert2';
import MyPendingTask from '../components/MyPendingTask';

const MySchedule = () => {
    const { user } = useContext(AuthContext);
    const [bookingCard, setBookingCard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pendingServices, setPendingServices] = useState([]);

  console.log("my pending",pendingServices);

  // get my booked services
    useEffect(() => {
    axios
      .get(`http://localhost:5000/bookings/?email=${user?.email}`)
      .then((response) => {
        setBookingCard(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user?.email]);

  // get my provided services
    useEffect(() => {
    axios
      .get(`http://localhost:5000/myservice/?email=${user?.email}`)
      .then((response) => {
        setPendingServices(response.data);
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

 <div className='grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto my-6'>
        {
          pendingServices.length !==0 ?
          pendingServices.map((booking) => (
            <MyPendingTask key={booking._id} booking={booking}></MyPendingTask>
        ))
        :
          <div className='col-span-2 flex justify-center items-center flex-col-reverse'>
            <h2 className="text-xl font-semibold text-center text-lime-400">Currently you are not providing any service</h2>
        
          </div>
          
        }
        

        </div>
    </div>
    );
};

export default MySchedule;
