import { useLoaderData } from 'react-router-dom';
import Service from './Service';
import { useEffect, useState } from 'react';

const Services = () => {
    const services = useLoaderData();
    const [searchValue, setSearchValue] = useState("");
    const [filteredService, setFilteredService] = useState(services)
    useEffect(() => {
        const filteredService = services.filter(service =>
          service?.service_name
          .toLowerCase().includes(searchValue.toLowerCase()))
        setFilteredService(filteredService)
    }, [searchValue,services])

    return (
        <div>
            <input type="text" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="Search by name" />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 my-6 container mx-auto'>
                {
                    filteredService?.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
// import { useLoaderData } from 'react-router-dom';
// import Service from './Service';
// import { useEffect } from 'react';

// const Services = () => {
//     const services = useLoaderData();
//     const [searchValue, setSearchValue] = useState("");
//     useEffect(() => {
//       const filteredService = services.filter(value =>
//          value.name.toLowerCase().includes(searchValue.toLowerCase()))
//       setPacientes(filteredService)
//     }, [searchValue])
    

//     };
//     return (
//        <div>
//               <input type="text" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="Search by name"/>

//          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 my-6 container mx-auto'>
//           {
//             services?.map(service => <Service 
//               key={service._id}
//               service={service}></Service>)
//           }
//         </div>
//        </div>
//       );
      
// };

// export default Services;