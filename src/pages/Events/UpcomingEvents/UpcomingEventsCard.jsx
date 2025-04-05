import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpcomingEventsCard = () => {
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get('http://localhost:5000/events'); // Update with your correct server URL
                setEventsData(res.data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    const formatDate = (eventDate) => {
        const date = new Date(eventDate); // Convert ISO string to Date object
        const day = date.getDate(); // Extract day
        const month = date.toLocaleString('default', { month: 'short' }); // Extract month (e.g., Mar, Apr)
        const year = date.getFullYear(); // Extract year
        return { day, monthYear: `${month} ${year}` }; // Return formatted date and monthYear
    };

    return (
        <div className='grid justify-center gap-8 mx-auto lg:grid-cols-2 xl:grid-cols-3'>
            {eventsData.map((event) => {
                const { day, monthYear } = formatDate(event.eventDate); // Use the formatDate function

                return (
                    <div
                        key={event._id} // Use _id here, as it’s the default MongoDB field
                        className="relative mx-auto overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-2xl card card-compact justify-items-center group"
                    >
                        <figure className='overflow-hidden'>
                            <img
                                src={event.image}
                                alt={event.title}
                                className="object-cover w-full h-[225px] transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110"
                            />
                        </figure>
                        <div className="card-body">
                            <p className='font-sans text-xl text-[#003366] font-semibold'>{event.title}</p>
                            <p className='text-sm'>{event.description}</p>
                        </div>
                        <div className="absolute top-0 left-0 px-3 pb-3 font-sans text-white rounded-br-lg max-w-24 bg-[#003366] text-center">
                            <h1 className='text-[30px] leading-tight font-semibold'>{day}</h1> {/* Display day */}
                            <p className='leading-tight whitespace-nowrap'>{monthYear}</p> {/* Display monthYear */}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default UpcomingEventsCard;
