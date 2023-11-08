
import Banner from '../components/Banner';
import Testimonial from '../components/Testimonial';
import TopServices from '../components/TopServices';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <TopServices></TopServices>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;