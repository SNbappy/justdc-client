import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import UpcomingEventsCard from './EventsCard';
import EventCalendar from './EventCalandar';

const Events = () => {
    const [events, setEvents] = useState([]);
    const { user } = useContext(AuthContext);  // Get logged-in user info
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/events')
            .then(res => {
                setEvents(res.data);
            })
            .catch(err => {
                console.error("Failed to fetch events:", err);
            });
    }, []);

    const handleAddEvent = () => {
        navigate('/add-event'); // Redirect to Add Event page
    };

    return (
        <div className='max-w-[1250px] mx-auto mb-10 px-4'>
            <h2 className='text-5xl mt-20 font-sans font-bold text-[#003366] py-4'>JUSTDC Events</h2>

            {/* Show Add Event button only for logged-in users */}
            {user && (
                <div className="flex justify-end mb-6">
                    {/* <button
                        onClick={handleAddEvent}
                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    >
                        + Add Event
                    </button> */}
                </div>
            )}

            <div className='grid gap-10 mt-10 md:grid-cols-3'>
                <div className='md:col-span-2'>
                    <UpcomingEventsCard events={events} />
                </div>
                <div>
                    <EventCalendar events={events} />
                </div>
            </div>
        </div>
    );
};

export default Events;
