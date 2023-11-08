
'use client';

import axios from 'axios';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';

function BookingModal({ service,setOpenModal,openModal }) {
  const { user } = useContext(AuthContext);


  const handleAddBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const status = 'Pending';
    const service_name = form.service_name.value;
    const instruction = form.instruction.value;
    const service_price = service.service_price; 
    const service_image = service?.service_image; 
    const date = form.date.value;
    const provider = service.service_provider.email
    const BookedBy =  user.email;
     
    const newBooking = {
      service_name,
      service_image,
      service_price,
      date,
      BookedBy,
      provider,
      status,
      instruction
    };
   

    console.log("myBooking:",newBooking);

    axios.post('https://b8a11-server-side-ri1or6uhq-sumaiyasinja.vercel.app/bookings', newBooking)
    .then(data => {
      console.log(data);
      if(data.data.acknowledged){
        form.reset();
        toast.success('Service booked successfully')
        setOpenModal(false)
        
      }
    })
    .catch( error => {
      console.log(error);
      toast.error("Failed booking",error.message)
      setOpenModal(false)
    });
    
    

  }

  return (
    <div className='container mx-auto '>
      <Toaster></Toaster>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} >
        <Modal.Header  className=''/>
        <Modal.Body className='bg-[]'>
    <img className='rounded-2xl pb-2' src= {service?.service_image}
 alt="service img" />
        <form className='' onSubmit={handleAddBooking}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="service_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Service Name
              </label>
              <input
              value={service?.service_name}
                type="text"
                name="service_name"
                id="service_name"
                className="bg-base-200 border border-gray-300 cursor-not-allowed text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder={service?.service_name}
                disabled
                readOnly
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="Price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price
              </label>
              <input
              value={service?.service_price}
                type="text"
                name="service_price"
                id="service_price"
                className="bg-base-200 border border-gray-300 cursor-not-allowed text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder={service?.service_price}
                disabled
                readOnly
              />
            </div>
            
                 
            <div className="sm:col-span-2">
              <label htmlFor="service_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Provider
              </label>
              <input
              value={service?.service_provider?.name}
                type="text"
                name="provider"
                id="service_price"
                className="bg-base-200 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder={service?.service_provider?.name}
                readOnly
                disabled
              />
            </div>
            
            
       
          </div>
          {/* alowed */}
            <div className="sm:col-span-2">
                <label htmlFor="service_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Please Pick a Date
                </label>
                <input
                    defaultValue={new Date().toISOString().slice(0, 10)}
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
                Special instruction
               </label>
                <input
                    type="text"
                    required
                    name="instruction"
                    id="instruction"
                    className="bg-lime-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Special instruction (address , area, customized service)"
                />
                </div>
          <div className="flex justify-center items-center  ">
            <input
              type="submit"
              className="font-medium mt-3 text-center bg-teal-50 custom-btn w-full rounded-xl focus:ring-4"
              value="Purchase this Service"

            />
          </div>
        </form>
       

        </Modal.Body>
      </Modal>
    </div>
  );
}
export default BookingModal;