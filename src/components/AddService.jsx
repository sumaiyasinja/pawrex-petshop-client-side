import Swal from 'sweetalert2'

const AddService = () => {
    const handleAddService = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;


        const newService = { name, price,}

        console.log(newService);

        // fetch('http://localhost:5000/services', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newService)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
            
        //     if(data.insertedId){
        //         Swal.fire({
        //             title: 'Success!',
        //             text: 'Product Added Successfully',
        //             icon: 'success',
        //             confirmButtonText: 'Done.'
        //           })
        //           form.reset()
        //     }
        // })
    }
  return (
    <section className="bg-white dark:bg-gray-900 pt-14">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-6">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white py-2">
          Add a new product
        </h2>
        <form onSubmit={handleAddService}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Service Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type service name"
                required
              />
            </div>
        
         

        
          </div>
          <div className="flex justify-center items-center">
            <input
              type="submit"
              className="font-medium mt-3 text-center bg-primary-700 custom-btn px-5 py-2.5 rounded-lg focus:ring-4 "
              value="Add product"
            />
          </div>
        </form>
      </div>
    </section>
  );

};

export default AddService;