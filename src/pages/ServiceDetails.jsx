import { Badge, Button } from 'flowbite-react';
import { useLoaderData } from 'react-router-dom';
import { HiCheck,  } from 'react-icons/hi';
'use client';
import {IoMdCart} from 'react-icons/io';
import { Avatar } from 'flowbite-react';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';


const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    const { _id, service_image, service_name, service_description, service_provider, service_area, service_price, times_taken } = service;
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>

{openModal && (
        <BookingModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        service={service}
        />
      )}
            <div className='container mx-auto '>
                <img src="https://i.ibb.co/L1SjQ2t/vet-min.webp" alt="" />
            </div>
<div className=" min-h-screen bg-base-200 container mx-auto pt-20">
  <div className="hero-content justify-around  flex-col lg:flex-row-reverse">

    <img src={service_image} className="max-w-sm shadow-2xl border-[15px] rounded-lg  border-solid border-white" />
    <div>
      <h1 className="text-5xl font-bold">{service_name}</h1>
      <p className="py-6">{service_description}</p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
        <Badge color="pink" icon={HiCheck} />
        <p className="py-2">Area: {service_area}</p>

        </div>
        <div className="flex items-center gap-2">
        <Badge color="green" icon={HiCheck} />
      <p className="py-2">Price: {service_price}</p>

        </div>
        <div className="flex items-center gap-2">

        <Badge color="purple" icon={HiCheck} />
      <p className="py-2">Time Taken: {times_taken}</p>
        </div>

    </div>

    <div onClick={() => setOpenModal(true)}
    >

      <Button gradientDuoTone="tealToLime" className="btn btn-primary m-4 font-simibold">    
      <IoMdCart></IoMdCart>  <p>  </p>
      Add to cart</Button>
    </div>

    </div>

  </div>
</div>
<div className=" min-h-screen bg-base-200 container mx-auto">
  <div className="hero-content justify-around flex-col lg:flex-row">

    <img src={service_provider?.image} className="max-w-sm shadow-2xl border-[15px] rounded-lg  border-solid border-white" />
    <div>
    <h1 className="text-5xl font-bold">Service Provider</h1>


    <div >
      <div className="space-y-1 font-medium dark:text-white">
      <p className="py-2">{service_provider.name}</p>
      <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
      </div>
    <p className="text-sm text-gray-500 dark:text-gray-400">Experience Level: {service_provider.level}</p>
    </div>
    </div>
  </div>
  
</div>

  
        </div>
    )
};

export default ServiceDetails;