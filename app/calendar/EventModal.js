// import React from "react";

// const EventModal = ({ event, onClose }) => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <h2 className="text-xl font-bold mb-4">{event.title}</h2>
//         <p>Date: {event.start.toDateString()}</p>
//         <p>Location: {event.extendedProps.location}</p>
//         <div className="mt-4 flex justify-end">
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             onClick={onClose}
//           >
//             Close
//           </button>
//           <button
//             className="px-4 py-2 ml-2 bg-green-500 text-white rounded hover:bg-green-600"
//             onClick={() => {
//               // Logic to add event to user's calendar goes here
//             }}
//           >
//             Add to Calendar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventModal;

import React from "react";

const EventModal = ({ event, onClose }) => {
  const handleAddToCalendar = () => {
    // Placeholder logic to add event to user's calendar
    console.log("Event added to calendar:", event.title);
    // Close the modal after adding to calendar
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">{event.title}</h2>
        <p>Date: {event.start.toDateString()}</p>
        <p>Location: {event.extendedProps.location}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="px-4 py-2 ml-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleAddToCalendar}
          >
            Add to Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
