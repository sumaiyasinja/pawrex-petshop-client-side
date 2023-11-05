
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Foot from '../components/Foot';


const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Root;