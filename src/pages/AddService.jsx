import { useContext } from "react";
import { AuthContext } from './../provider/AuthProvider';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddService = () => {
  const {user} =useContext(AuthContext)
  console.log(user);
  const handleAddService = (event) => {
    event.preventDefault();

    const form = event.target;

    const service_name = form.service_name.value;
    const service_price = form.service_price.value;
    const service_description = form.service_description.value;
    const times_taken = form.times_taken.value;
    const service_image = form.service_image.value; 
    const service_area = form.service_area.value; 
    
    const service_provider = {
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
      level: "Beginner"
    };

    const newService = {
      service_name,
      service_description,
      service_image,
      service_price,
      times_taken,
      service_area,
      service_provider
    };

    console.log(newService);

    axios.post('http://localhost:5000/services', newService)
    .then(data => {
      console.log(data);
      if(data.data.acknowledged){
        form.reset();
        toast.success('Service added successfully')
      }else{
        toast.error(data.data.message)
      }
      }
    )

  };

  return (
    <section className="bg-base-200 dark:bg-gray-900 pt-14 container mx-auto rounded-xl py-3">
      <Toaster />
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-6">
        <h2 className="mb-4 text-4xl text-slate-800 font-bold  dark:text-white py-2">
          Add a new service
        </h2>

        <form onSubmit={handleAddService}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            
            <div className="sm:col-span-2">
              <label htmlFor="service_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Service Name
              </label>
              <input
                type="text"
                name="service_name"
                id="service_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type service name"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="service_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Service service_image
              </label>
              <input
                type="url"
                name="service_image"
                id="service_image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter Img URL of your service"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="service_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price
              </label>
              <input
                type="text"
                name="service_price"
                id="service_price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type service Price"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="service_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Service Description
              </label>
              <input
                type="text"
                name="service_description"
                id="service_description"
                maxLength="100"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type service description (max length 100 characters)"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="service_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Service service_area
              </label>
              <input
                type="text"
                name="service_area"
                id="service_area"
                maxLength="100"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type service_area"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="times_taken" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Service Sells
              </label>
              <input
                type="number"
                name="times_taken"
                id="times_taken"
                defaultValue="0"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type times_taken"
                required
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="submit"
              className="font-medium mt-3 text-center bg-primary-700 custom-btn px-5 py-2.5 rounded-lg focus:ring-4"
              value="Add Service"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddService;
