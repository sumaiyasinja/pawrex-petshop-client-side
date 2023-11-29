import { Badge, Button } from 'flowbite-react';
import { useLoaderData, Link } from 'react-router-dom';
import { HiCheck } from 'react-icons/hi';
import { IoMdCart } from 'react-icons/io';
import { useState, useEffect } from 'react';
import BookingModal from '../components/BookingModal';
import { Helmet } from 'react-helmet';
import { Typewriter } from 'react-simple-typewriter';

const ServiceDetails = () => {
  const service = useLoaderData();
  const [otherServices, setOtherServices] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const fetchOtherServices = async () => {
      try {
        // Fetch all services
        const response = await fetch("https://b8a11-server-side-iota.vercel.app/services");
        const allServices = await response.json();

        // Filter services by provider's email, excluding the current service
        const servicesByProvider = allServices.filter(
          otherService =>
            otherService.service_provider.email === service.service_provider.email &&
            otherService._id !== service._id
        );

        setOtherServices(servicesByProvider);
      } catch (error) {
        console.error('Error fetching other services:', error);
      }
    };

    fetchOtherServices();
  }, [service]);

  return (
    <div>
      <Helmet>
        <title>Pawrex | Services</title>
      </Helmet>
      {openModal && (
        <BookingModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          service={service}
        />
      )}
      <div className='container relative mx-auto '>
        <img src="https://i.ibb.co/L1SjQ2t/vet-min.webp" alt="" />
        
        <p className='md:text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        We offer various services for your beloved pets, including{' '}
        <Typewriter className=" text-white font-bold"
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          words={['Pet sitting', 'Pet medication', 'Dog Walking', 'Overnight Care','Pet Grooming', 'and more...']}
          onFinish={() => setIsTyping(false)}
          loopDelay={2000}
          stop={isTyping}
        />
      </p>
      </div>
      <div className="min-h-screen bg-base-200 container mx-auto pt-20">
        <div className="hero-content justify-around flex-col lg:flex-row-reverse">
          <img
            src={service.service_image}
            className="max-w-sm shadow-2xl border-[15px] rounded-lg border-solid border-white"
            alt=""
          />
          <div className='pb-20'>
            <h1 className="text-5xl font-bold">{service.service_name}</h1>
            <p className="py-6">{service.service_description}</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Badge color="pink" icon={HiCheck} />
                <p className="py-2">Area: {service.service_area}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge color="green" icon={HiCheck} />
                <p className="py-2">Price: {service.service_price}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge color="purple" icon={HiCheck} />
                <p className="py-2">Sells: {service.times_taken} times</p>
              </div>
            </div>
            <div onClick={() => setOpenModal(true)}>
              <Button
                gradientDuoTone="tealToLime"
                className="btn btn-primary m-4 font-simibold"
              >
                <IoMdCart></IoMdCart>
                <p> </p>
                Add to cart
              </Button>
            </div>
          </div>

        </div>
        <div className="mt-9 min-h-screen bg-base-200 container mx-auto">
          <div className="hero-content justify-around flex-col pb-20 lg:flex-row">
          <img src={service?.service_provider?.image} className="max-w-sm shadow-2xl border-[15px] rounded-lg  border-solid border-white" />
            <div>
              <h1 className="text-5xl font-bold">Service Provider</h1>
              <div>
                <div className="space-y-1 font-medium dark:text-white">
                  <p className="py-2">{service?.service_provider.name}</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Joined in August 2014
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Experience Level:
                  {service?.service_provider.level
                    ? service.service_provider.level
                    : "Not Available"}
                </p>
                {service?.service_provider?.email && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email: {service.service_provider.email}
                  </p>
                )}
                {service?.service_area && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Service Area: {service.service_area}
                  </p>
                )}
              </div>
            </div>
          </div>
          <hr />
          <p className="text-xl py-5 text-gray-500 text-center dark:text-gray-400">
            More services from this provider:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 py-6 pb-9 container mx-auto">
            {otherServices.map((otherService) => (
              <div key={otherService._id} className="flex justify-center container mx-auto items-center rounded-lg bg-base-100 shadow-xl">
                <Link to={`/services/${otherService?._id}`}>
                  <img
                    src={otherService?.service_image}
                    alt=""
                    className="max-w-sm pt-4 rounded-lg w-[70%]shadow-lg"
                  />
                  <p className="text-lg text-center text-gray-500 font-bold">{otherService?.service_name}</p>
                  <p className="text-lg text-center text-gray-500 font-semibold">Price: {otherService?.service_price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default ServiceDetails;
