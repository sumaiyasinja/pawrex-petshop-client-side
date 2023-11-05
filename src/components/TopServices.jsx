import { useEffect, useState } from 'react';

const TopServices = () => {
    const [services, setServices] = useState([]);
    const [topServices, setTopServices] = useState([]);

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
            <h2>Top Services</h2>
            <ul>
                {topServices.map((service, index) => (
                    <li key={index}>
                        {service.service_name} - Times Taken: {service.times_taken}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopServices;
