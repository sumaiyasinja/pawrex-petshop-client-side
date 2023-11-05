'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';



const Foot = () => {
    return (

      <Footer container className='bg-[#f5f5f5] container mx-auto'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
          <Footer.Brand
            href="/"
            src="https://i.ibb.co/23rnS49/Pngtree-pet-shop-logo-puppy-simple-5755006.png"
            alt=" Logo"
            name="PawRex"
          /> 
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="contact" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">+001977867567</Footer.Link>
                <Footer.Link href="#">pawrex@petcare.com</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Address" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">221B Baker Street </Footer.Link>
                <Footer.Link href="#">London, UK</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="PawRex" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://wwww.facebook.com" icon={BsFacebook} />
            <Footer.Icon href="https://wwww.instagram.com" icon={BsInstagram} />
            <Footer.Icon href="https://wwww.twitter.com" icon={BsTwitter} />
            <Footer.Icon href="https://wwww.github.com" icon={BsGithub} />
            <Footer.Icon href="https://wwww.dribbble.com" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
 
);
};

export default Foot;