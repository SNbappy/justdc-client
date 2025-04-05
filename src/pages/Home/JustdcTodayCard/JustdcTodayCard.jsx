import { useEffect, useState } from "react";
import axios from 'axios';

const JustdcTodayCard = () => {
    const [eventsData, setEventsData] = useState([]);
    const [displayEvents, setDisplayEvents] = useState([]);

    // Fetch data from the backend
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get('http://localhost:5000/events'); // Change to your server URL
                const events = res.data;

                // Sort the events by eventDate (ascending, from now)
                const sortedEvents = events
                    .map(event => ({
                        ...event,
                        eventDate: new Date(event.eventDate), // Convert eventDate string to Date object
                    }))
                    .sort((a, b) => a.eventDate - b.eventDate); // Sort by ascending event date

                // Set the current date to midnight for accurate comparison
                const today = new Date();
                today.setHours(0, 0, 0, 0); // Set to midnight

                // Filter upcoming events (those happening after today)
                const upcomingEvents = sortedEvents.filter(event => event.eventDate > today);

                // If there are less than 3 upcoming events, show past events
                if (upcomingEvents.length < 3) {
                    const pastEvents = sortedEvents.filter(event => event.eventDate <= today);
                    const requiredPastEvents = pastEvents.slice(0, 3 - upcomingEvents.length);
                    setDisplayEvents([...upcomingEvents, ...requiredPastEvents]);
                } else {
                    // Otherwise, show 3 upcoming events
                    setDisplayEvents(upcomingEvents.slice(0, 3));
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className='grid justify-center gap-8 mx-auto lg:grid-cols-2 xl:grid-cols-3'>
            {displayEvents.map((event) => {
                // Format the event date
                const eventDate = new Date(event.eventDate);
                const day = eventDate.getDate(); // Get day
                const month = eventDate.toLocaleString('default', { month: 'short' }); // Get short month name (e.g. "Mar")
                const year = eventDate.getFullYear(); // Get year

                return (
                    <div
                        key={event.id}
                        className="relative mx-auto overflow-hidden shadow-lg cursor-pointer rounded-xl hover:shadow-2xl card card-compact justify-items-center group max-w-[420px]"
                    >
                        <figure className='overflow-hidden'>
                            <img
                                src={event.image}
                                alt={event.title}
                                className="object-cover w-full h-[259px] transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110"
                            />
                        </figure>
                        <div className="card-body">
                            <p className='py-2 font-sans text-2xl lg:text-2xl text-[#003366] font-bold'>{event.title}</p>
                            <p className='text-lg'>{event.description}</p>
                        </div>
                        <div className="absolute top-0 left-4 px-3 pb-3 font-sans text-white rounded-b-lg max-w-24 bg-[#003366] text-center">
                            <h1 className='text-[30px] leading-tight'>{day}</h1>
                            <p className='leading-tight whitespace-nowrap'>{month} {year}</p>
                        </div>
                        <button className='bg-[#003366] text-white font-sans py-2 rounded-b-lg uppercase text-xs sm:text-base hover:bg-[#004477]'>See Details</button>
                    </div>
                );
            })}
        </div>
    );
};

export default JustdcTodayCard;
