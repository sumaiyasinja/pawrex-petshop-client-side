function ShopFAQAccordion() {
  return (
    <div className='container mx-auto my-6 rounded-lg'>
      <section className="bg-gray-100 text-gray-800 ">
        <div className="container flex flex-col justify-center rounded p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How Our Pet Caring Service Works</p>
          <h2 className="mb-12 text-4xl font-bold leading-tight text-center sm:text-5xl">Frequently Asked Questions</h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
            <details open="">
              <summary className="py-2 outline-none cursor-pointer focus:underline">What services do you offer for pets?</summary>
              <div className="px-4 pb-4">
                <p>At our pet caring service, we offer a wide range of services for your furry friends. These include dog walking, pet sitting, grooming, and even pet training. We cater to all your pet's needs with love and care.</p>
              </div>
            </details>
            <details open="">
              <summary className="py-2 outline-none cursor-pointer focus:underline">How can I book your pet sitting services?</summary>
              <div className="px-4 pb-4">
                <p>Booking our pet sitting services is easy and convenient. Simply visit our website or give us a call to schedule your pet's stay. We will work with your preferred dates and make sure your pet feels at home while you're away.</p>
              </div>
            </details>
            <details open="">
              <summary className="py-2 outline-none cursor-pointer focus:underline">Are your pet sitters experienced and trustworthy?</summary>
              <div className="px-4 pb-4 space-y-2">
                <p>Rest assured, our pet sitters are highly experienced and dedicated animal lovers. They undergo thorough training and background checks to ensure the safety and well-being of your pets. Your furry companions are in good hands with us!</p>
                <p>We understand the importance of trust when it comes to your pets, and we take that responsibility seriously. Our team is committed to providing the best care for your beloved animals.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShopFAQAccordion;
