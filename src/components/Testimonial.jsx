import { useState } from 'react';
import { motion } from "framer-motion";


const Testimonial = () => {
  const [activePage, setActivePage] = useState('page1');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className=''>
      <section className="my-8">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
          <h1 className=" leading-tight  text-4xl font-bold text-center">Few Words From The Leaders</h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
          <div className={`flex flex-col items-center mx-12 lg:mx-0 ${activePage === 'page1' ? 'opacity-100' : 'opacity-0'}`}>
            {/*  content for the first page here */}
            <motion.div
  className="box"
  animate={{
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1
  }}
>
  <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
</motion.div>
            
            <div className=" text-center">
              <p className="px-6 py-1 text-lg italic"><blockquote className="text-gray-500 max-w-lg text-lg italic font-medium text-center">
              Pawrex Company has exceeded our expectations. Quality services, top-notch service. Highly recommended!              </blockquote></p>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg bg-red-400"></span>
            <p className='text-gray-500'>Sumaiya Sinja</p>
              <p className='text-gray-500'>CEO of Pawrex Co.</p>
          </div>
          <div className={`flex flex-col items-center max-w-lg mx-12 lg:mx-0 ${activePage === 'page2' ? 'opacity-100' : 'opacity-0'}`}>
            {/* content for the second page here */}
            <motion.div
  className="box"
  animate={{
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1
  }}
>
<img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
</motion.div>
            
            <div className=" text-center">
              <p className="px-6 py-1 text-lg italic"><blockquote className="text-gray-500 max-w-lg text-lg italic font-medium text-center">
              Pawrex Company journey is a testament to our commitment to customer satisfaction. We've made a positive impact on a joy!
                           </blockquote></p>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg bg-red-400"></span>
            <p className='text-gray-500'>Tasmiya Ahmed Hiya</p>
              <p className='text-gray-500'>Founder of Pawrex Co.</p>
            
          </div>
        </div>
        <div className="flex space-x-2 justify-center mt-4">
          <button
            type="button"
            aria-label="Page 1"
            className={`w-2 h-2 rounded-full ${activePage === 'page1' ? 'bg-red-500' : 'bg-gray-600'}`}
            onClick={() => handlePageChange('page1')}
          ></button>
          <button
            type="button"
            aria-label="Page 2"
            className={`w-2 h-2 rounded-full ${activePage === 'page2' ? 'bg-red-500' : 'bg-gray-600'}`}
            onClick={() => handlePageChange('page2')}
          ></button>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;