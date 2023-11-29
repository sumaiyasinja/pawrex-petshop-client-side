import { useLoaderData } from 'react-router-dom';
import Service from './Service';
import { useEffect, useState } from 'react';

const Services = () => {
  const services = useLoaderData();
  const [searchValue, setSearchValue] = useState("");
  const [filteredService, setFilteredService] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const filtered = services.filter(service =>
      service?.service_name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredService(filtered.slice(0, showAll ? filtered.length : 6));
  }, [searchValue, services, showAll]);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      <div className="Container searchbox">
        <input
          type="text"
          name="text"
          className="input"
          required
          placeholder="Search by name"
          onChange={(e) => setSearchValue(e.target.value)} value={searchValue}
        />
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Search</title>
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            ></path>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M338.29 338.29L448 448"
            ></path>
          </svg>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 my-6 container mx-auto'>
        {filteredService.map(service => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <button
  className="btn btn-primary mx-auto block mt-4 p-2 px-4 my-4 rounded-2xl border-none bg-teal-500 text-white hover:bg-teal-700"
  onClick={handleShowAll}
  style={{ display: showAll ? 'none' : 'block' }}
>
  Show All
</button>

    </div>
  );
};

export default Services;
