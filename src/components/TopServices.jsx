import { Avatar, Card } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const TopServices = () => {
    const [services, setServices] = useState([]);
    const [topServices, setTopServices] = useState([]);
    // const { _id, service_image, service_name, service_description, service_provider, service_area, service_price, times_taken } = service;


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);

                // Sort and set the top 4 services here
                const sortedServices = data.sort((a, b) => b.times_taken - a.times_taken);
                const top4Services = sortedServices.slice(0, 4);
                setTopServices(top4Services);
            });
    }, []); 


    return (
        <div>
            <h2 className='text-3xl font-bold text-center p-6 my-7 '> Popular Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto lg:ml-5'>
                {topServices.map((service) => (
                    <div key={service._id}>
                        <Card className="" imgSrc={service.service_image} horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {service.service_name}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        {service.service_description}
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        Sells: {service.times_taken} Times
                        </p>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                        {service.service_price}
                        </p>
                        <Avatar img={service.service_provider.image} 
                        alt="avatar of provider" rounded  className='justify-normal'>
                            <div className="space-y-1 font-medium dark:text-white">
                              <p className="font-normal text-gray-400 dark:text-gray-400">
                        {service.service_provider.name}
                        
</p>                            </div>
                            </Avatar>
                        <button>View Details</button>
                        </Card>
                    </div>
                ))}
            </div>
            <NavLink to='/services' >View All</NavLink>
        </div>
    );
};

export default TopServices;
