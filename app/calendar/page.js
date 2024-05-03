// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page
"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import EventModal from "./EventModal";

const GoogleCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Google Calendar API configuration
  const googleCalendarApiKey = "AIzaSyDOp2lKANdmMhBRNZWBXA97pQOgF_yoQ3Q";
  const googleCalendarId =
    "q84dbo0ucqc7evjifhajadmo80@group.calendar.google.com";

  const handleEventClick = (eventInfo) => {
    setSelectedEvent(eventInfo.event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="w-full h-full">
      <h2 className="text-2xl mb-4">Google Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "timeGridWeek,timeGridDay,timeGridMonth",
        }}
        googleCalendarApiKey={googleCalendarApiKey}
        events={{
          googleCalendarId: googleCalendarId,
          color: "grey",
          borderColor: "black",
          textColor: "white",
          fontWeight: "bold",
        }}
        eventClick={handleEventClick}
      />
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  );
};

export default GoogleCalendar;
