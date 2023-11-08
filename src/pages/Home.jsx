
import Banner from '../components/Banner';
import ShopFAQAccordion from '../components/ShopFAQAccordion';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import TopServices from '../components/TopServices';
import UserDashboard from '../components/UserDashboard';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <TopServices></TopServices>
            <Testimonial></Testimonial>
            <Team></Team>
            <ShopFAQAccordion></ShopFAQAccordion>
            <UserDashboard></UserDashboard>
        </div>
    );
};

export default Home;