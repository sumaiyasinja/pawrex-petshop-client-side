
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import Marquie from '../components/Marquie';
import ReviewsSlider from '../components/ReviewsSlider';
import ShopFAQAccordion from '../components/ShopFAQAccordion';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import TopServices from '../components/TopServices';

const Home = () => {
    return (
        <div className='container mx-auto'>
             <Helmet>
    <title>Pawrex | Home
</title>
  </Helmet> 

            <Marquie></Marquie>
            <Banner></Banner>
            <TopServices></TopServices>
            <Team></Team>
            <ReviewsSlider></ReviewsSlider>
            <ShopFAQAccordion></ShopFAQAccordion>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;