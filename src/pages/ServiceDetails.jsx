import { Badge } from 'flowbite-react';
import { useLoaderData } from 'react-router-dom';
import { HiCheck,  } from 'react-icons/hi';


const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    const { _id, service_image, service_name, service_description,  service_area, service_price, times_taken } = service;

    return (
        <div>
            <div>
                <img src="https://i.ibb.co/L1SjQ2t/vet-min.webp" alt="" />
            </div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={service_image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{service_name}</h1>
      <p className="py-6">{service_description}</p>

      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>



             <div className="flex flex-wrap gap-2">
      <Badge icon={HiCheck} />
      <Badge color="gray" icon={HiCheck} />
      <Badge size="sm" icon={HiCheck} />
      <Badge color="gray" size="sm" icon={HiCheck} />
    </div>
        </div>
    );
};

export default ServiceDetails;