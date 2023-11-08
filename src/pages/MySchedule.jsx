import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import MyBooking from './myBooking';

const MySchedule = () => {
    const { user } = useContext(AuthContext);
    const [bookingCard, setBookingCard] = useState([]);

    useEffect(() => {
        // Fetch booking data when the component mounts
        axios.get(`http://localhost:5000/bookings?email=${user?.email}`)
            .then((response) => {
                setBookingCard(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user]);

    return (
        <div>
        <h2>Your Schedule</h2>
        <h2 className="text-xl font-semibold">Your cart</h2>

        {bookingCard.map((booking) => (
            <MyBooking key={booking._id} booking={booking} />
        ))}
    </div>
    );
};

export default MySchedule;
