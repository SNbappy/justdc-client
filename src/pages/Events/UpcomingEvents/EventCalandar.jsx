import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './EventCalendar.css';

// Event calendar component
const EventCalendar = ({ events = [] }) => {
    const [value, setValue] = useState(new Date());

    // Convert eventDate to Date objects
    const eventDates = events
        .filter(event => event?.eventDate) // Ensure eventDate exists
        .map(event => {
            const eventDate = new Date(event.eventDate); // Convert eventDate to Date object
            // Return the event's Date object
            return eventDate;
        });

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const isEvent = eventDates.some(eventDate =>
                eventDate.getFullYear() === date.getFullYear() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getDate() === date.getDate()
            );
            return isEvent ? 'highlight-event' : null; // Apply 'highlight-event' class for dates with events
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#003366]">Event Calendar</h3>
            <Calendar
                onChange={setValue}
                value={value}
                tileClassName={tileClassName}
            />
        </div>
    );
};

export default EventCalendar;