const Banner = () => {
    return (
      <div className="carousel w-full relative">
        <div id="item1" className="carousel-item w-full relative">
          <img
            src="https://quattro.true-emotions.studio/wp-content/uploads/2021/04/sla-3.jpg"
            className="w-full"
          />
  
          <div className="absolute flex justify-between px-10 
           w-full items-center bg-[#0000003A] h-full text-white">
          <div className="md:space-y-4  text-white p-2">
                    <h4 className="text-red-500 font-semibold">Best Automotive Brand Shop in Your Town</h4>
                    <p className="font-bold lg:text-3xl">Explore Excellence in 
                  at  Driven<span className="text-red-600">Ways</span> Car Dealership <br />
                  Chase Your Speedy <span className="text-red-600">Fantasy</span> Today!</p>
  
                    
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
            src="https://quattro.true-emotions.studio/wp-content/uploads/2021/04/sla-2.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between px-10  w-full items-center bg-[#0000003A] h-full text-white">
          <div className="md:space-y-4  text-white  p-2">
                    <h4 className="text-red-500 font-semibold">Best Automotive Brand Shop in Your Town</h4>
                    <p className="font-bold lg:text-3xl">Explore Excellence
                      at Driven<span className="text-red-600">Ways</span> Car Shop. <br />
                      Discover Your Ride <span className="text-red-600">PARTNER</span> Today!</p>
                    
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
            src="https://quattro.true-emotions.studio/wp-content/uploads/2021/04/mclaren-p1.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between px-10  w-full items-center bg-[#0000003A] h-full text-white">
          <div className="md:space-y-4  text-white  p-2">
                    <h4 className="text-red-500 font-semibold">Best Automotive Brand Shop in Your Town</h4>
                    <p className="font-bold lg:text-3xl">Cruise into Elegance and Performance 
                      at Driven<span className="text-red-600">Ways</span> Car Shop. <br />
                      Discover Your Dream <span className="text-red-600">RIDE</span> Today!</p>
                                        
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
        {/* <div id="item4" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
        </div> */}
      </div>
    );
  };
  
  export default Banner;