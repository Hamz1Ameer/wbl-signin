"use client";
// import React, { useState, useEffect } from "react";

// function MyComponent() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Fetch the JSON file from the public folder
//     fetch("/dump.json")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   // Use the JSON data in your component
//   return (
//     <div>
//       <h1>{data.id}</h1>
//       <p>{data.title}</p>
//     </div>
//   );
// }

// export default MyComponent;

import React, { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch("/dump.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  }, []);

  // Use the JSON data in your component
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1 className="text-3xl">{item.title}</h1>
          <img src={item.thumbnailUrl} alt={item.title} />
          <p>{item.description}</p>
          <p>Author: {item.author}</p>
          <p>Views: {item.views}</p>
          <p>Duration: {item.duration}</p>
          <p>Upload Time: {item.uploadTime}</p>
          <p>Subscriber: {item.subscriber}</p>
          <p>Is Live: {item.isLive ? "Yes" : "No"}</p>
          <video controls>
            <source src={item.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
