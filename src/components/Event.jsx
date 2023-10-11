import React from "react";
import {Link} from 'react-router-dom'
function Event({ title,location, photo, id, details, date }) {
  return (
    <>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src={photo}
          />
        </div>
        <h2 className="text-xl mb-3 font-medium title-font text-gray-900 mt-5">
          {title}
        </h2>
        <div className="flex justify-between">
          <h2 className="text-md font-bold">Location : {location}</h2>
          <h2 className="text-md font-bold">Date : {date}</h2>
        </div>
        <p className="text-base leading-relaxed mt-2">{details}</p>
        <Link to={`/event/${id}`} className="text-indigo-500 inline-flex items-center mt-3">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </>
  );
}

export default Event;
