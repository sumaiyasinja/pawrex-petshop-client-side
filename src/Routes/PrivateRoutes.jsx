import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
'use client';
import { Button, Spinner } from "flowbite-react";
import { AuthContext } from "../provider/AuthProvider";


const PrivateRoutes = ({children}) => {
    const {user, loading} =useContext(AuthContext)
    const location= useLocation()

    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <Button color="gray">
                <Spinner aria-label="Alternate spinner button example" size="sm" />
                <span className="pl-3 text-9xl text-teal-500">Loading...</span>
            </Button>
        </div>

    }
    if(user){
        return children
     }
    
    return <Navigate state={location?.pathname} to='/login'></Navigate>
    };

    PrivateRoutes.propTypes = {
        children: PropTypes.node,
      };

export default PrivateRoutes;