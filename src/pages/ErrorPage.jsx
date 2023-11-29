
import { useNavigate } from 'react-router-dom';
import Foot from '../components/Foot';
import Navbar from './../components/Navbar';
import { useState } from 'react';
import { GiRaceCar } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { Helmet } from "react-helmet";



const ErrorPage = () => {
    const navigate= useNavigate()
    const [animation, setAnimation] = useState(false);
    
    const handleMoveToLeft = () => {
        setAnimation(true);
        setTimeout(() => {
            setAnimation(false);
            navigate('/')
        }, 1000);
        
    }
    return (
        <div className="container mx-auto">       
         <Helmet>
    <title>Pawrex | Error Page
</title>
  </Helmet>  
        <Navbar></Navbar>
        <div className="flex flex-col items-center justify-center h-screen py-4">
            <p className="text-xl text-black fo9*/77nt-bold mb-6">Page Not Found</p>
            <div className="flex items-center justify-center">
            </div>
               <img src="https://i.ibb.co/1Gn062w/error-removebg-preview.png" alt="" />
            <button onClick={handleMoveToLeft} className={`mt-6 px-6 py-2 text-white ${animation ? 'move-left' : ''}`}>
            <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500
             to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300
              dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Go Home
                </button>

                </button>
        </div>
            <Foot></Foot>
        </div>  
    );
};

export default ErrorPage;