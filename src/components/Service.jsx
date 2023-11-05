
import PropTypes from 'prop-types';
import { Button, Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';


const Service = ({service}) => {
    // console.log(service);
    const navigate = useNavigate();
    return (
        <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={service?.service_image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {service?.service_name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      {service?.service_description}
   
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      <span className="font-bold">service Area: </span>{service?.service_area}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      <span className="font-bold">Price: </span>{service?.service_price}   
   
      </p>
      {/* <Button gradientDuoTone="greenToBlue">Green to Blue</Button> */}
      <Button gradientDuoTone="greenToBlue" 
      onClick={() => navigate(`/services/${service?._id}`)}
      >View Details</Button>


    </Card>
    );
};

Service.propTypes = {
    service: PropTypes.object
};

export default Service;