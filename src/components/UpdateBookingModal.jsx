
'use client';

import axios from 'axios';

import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

function UpdateBookingModal() {
  const service = useLoaderData();
  console.log("Updatepage",service);
//update booking data
const handleUpdate = (event) => {
    event.preventDefault();

        const form = event.target;
        const date = form.date.value;
        const instruction = form.instruction.value;

        const status = service?.status;
        const service_name = service?.service_name;
        const service_price = service?.service_price; 
        const service_image = service?.service_image; 
        const provider = service.provider
        const BookedBy =  service?.BookedBy;
         
        const updateBooking = {
          service_name,
          service_image,
          service_price,
          date,
          BookedBy,
          provider,
          status,
          instruction
        };
console.log("myBooking update:",updateBooking);
    Swal.fire({
      title: "Do you want to update  the service from the cart?",
      showDenyButton: true,
      confirmButtonText: "",
      denyButtonText: `Don't `
    }).then((result) => {
  
      if (result.isConfirmed) {
    axios.put(`https://b8a11-server-side-ri1or6uhq-sumaiyasinja.vercel.app/bookings/${service?._id}`,updateBooking)
        .then((response) => {
          
          if (response.status === 200) {
            Swal.fire("Updated!", "", "success");
            // const remaining = bookingCard.filter((booking) => booking._id !== id);
            // setBookingCard(remaining);
          } 
          
        })
        .catch((error) => {
          Swal.fire("Failed: " + error.message);
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not applied");
      }
    });
  

  }

//   const handleUpdateBooking = (event) => {
//     event.preventDefault();

//     const form = event.target;
//     const status =
//     const service_name = form.service_name.value;
//     const instruction = form.instruction.value;
//     const service_price = service.service_price; 
//     const service_image = service?.service_image; 
//     const date = form.date.value;
//     const provider = service.service_provider.email
//     const BookedBy =  user.email;
     
//     const newBooking = {
//       service_name,
//       service_image,
//       service_price,
//       date,
//       BookedBy,
//       provider,
//       status
//     };
   

//     console.log("myBooking:",newBooking);

//     // axios.post('https://b8a11-server-side-ri1or6uhq-sumaiyasinja.vercel.app/bookings', newBooking)
//     // .then(data => {
//     //   console.log(data);
//     //   if(data.data.acknowledged){
//     //     form.reset();
//     //     toast.success('Service booked successfully')
//     //     setOpenModal(false)
        
//     //   }
//     // })
//     // .catch( error => {
//     //   console.log(error);
//     //   toast.error("Failed booking",error.message)
//     //   setOpenModal(false)
//     // });
    
    

//   }

  return (
    <div className='container mx-auto '>
      <h2 className='text-3xl font-bold  text-center text-teal-500'>Update Your Booking</h2>

       <div className='my-7 bg-base-300 rounded-2xl w-1/2 mx-auto  flex flex-col justify-center items-center'>
       <img className='rounded-3xl p-8 w-fit md:w-full' src= {service?.service_image}
 alt="service img" />
        <form className='w-[90%]' onSubmit={handleUpdate}>
          
          {/* alowed */}
            <div className="sm:col-span-2">
                <label htmlFor="service_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                 Update Service Date
                </label>
                <input
                    defaultValue={service?.date}
                    type="date"
                    name="date"
                    id="date"
                    className="bg-lime-50 cursor-pointer  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Service Taking Date"
                    required
                    
                />
                </div>
            <div className="sm:col-span-2">
                <label htmlFor="service_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Update Special Instruction
               </label>
                <input
                    defaultValue={service?.instruction}
                    type="text"
                    required
                    name="instruction"
                    id="instruction"
                    className="bg-lime-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Special instruction (address , area, customized service)"
                />
                </div>
          <div className="flex justify-center items-center py-4">
            <input
              type="submit"
              className="font-medium mt-3 text-center bg-teal-50 custom-btn w-full 
               rounded-xl focus:ring-4"
              value="Update Cart"

            />
          </div>
        </form>
       </div>

    </div>
  );
}
export default UpdateBookingModal;