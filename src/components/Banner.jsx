const Banner = () => {
    return (
      <div className="carousel w-full relative">
        <div id="item1" className="carousel-item w-full relative">
          <img
            src="https://i.ibb.co/vs0vY4y/Pngtree-pet-cat-pet-shop-cute-1018597.jpg"
            className="w-full"
          />
  
          <div className="absolute flex justify-between px-10 
           w-full items-center bg-[#0000003A] h-full text-white">
          <div className="md:space-y-4  text-white p-2">
                    <h4 className="text-red-500 font-semibold">Best pet caring service in Your Town</h4>
                    <p className="font-bold lg:text-3xl">Explore Excellence in 
                  at Paw<span className="text-teal-600">Rex</span> <br />
                                        </p>
                    
                  </div>
                  <div className=" flex flex-col gap-2">
                    <a href="#item1" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-500 hover:bg-black hover:text-white hover:border-white">
                      1
                    </a>
                    <a href="#item2" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-500 hover:bg-black hover:text-white hover:border-white">
                      2
                    </a>
                    <a href="#item3" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-500 hover:bg-black hover:text-white hover:border-white">
                      3
                    </a>
                  </div>
            </div>
  
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img
                        src="https://i.ibb.co/L1SjQ2t/vet-min.webp"

            className="w-full"
          />
          <div className="absolute flex justify-between px-10  w-full items-center bg-[#0000003A] h-full text-white">
          <div className="md:space-y-4  text-white  p-2">
                    <h4 className="text-red-500 font-semibold">Best pet caring service in Your Town</h4>
                    <p className="font-bold lg:text-3xl">Explore Excellence
                      at Paw<span className="text-teal-600">Rex</span>  <br />
                                        </p>                    
                  </div>
                  <div className=" flex flex-col gap-2">
                    <a href="#item1" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-500 hover:bg-black hover:text-white hover:border-white">
                      1
                    </a>
                    <a href="#item2" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-500 hover:bg-black hover:text-white hover:border-white">
                      2
                    </a>
                    <a href="#item3" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-500 hover:bg-black hover:text-white hover:border-white">
                      3
                    </a>
                  </div>
            </div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img
            src="https://i.ibb.co/Vp84pYS/leohoho-x-ULWTPnq-M5-I-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between px-10  w-full items-center bg-[#0000003A] h-full text-white">
          <div className="md:space-y-4  text-white  p-2">
                    <h4 className="text-red-500 font-semibold">Best pet caring service in Your Town</h4>
                    <p className="font-bold lg:text-3xl">Cruise into Elegance and Performance 
                      at Paw<span className="text-red-600">Rex</span> Shop. <br />
                                        </p>
                                      </div>
                  <div className=" flex flex-col gap-2">
                    <a href="#item1" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-500 hover:bg-black hover:text-white hover:border-white">
                      1
                    </a>
                    <a href="#item2" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-500 hover:bg-black hover:text-white hover:border-white">
                      2
                    </a>
                    <a href="#item3" className="btn btn-xs rounded-full bg-[#0000002A] border-black text-gray-500 hover:bg-black hover:text-white hover:border-white">
                      3
                    </a>
                  </div>
            </div>
        </div>
      
      </div>
    );
  };
  
  export default Banner;