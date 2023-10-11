import React from "react";
import Event from "./Event";

function EventList({ events }) {
  if (events.length == 0) {
    return (
      <>
        <h1 className="title-font sm:text-4xl text-md mb-8 text-center font-medium text-gray-900 flex justify-center items-center h-16">
          No Events Found
        </h1>
      </>
    );
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {events.map((item) => (
              <Event
                key={item.event_id}
                id={item.event_id}
                title={item.event_name}
                date={item.event_date}
                location={item.event_location}
                details={item.event_description.substring(0, 100)}
                photo={item.event_image_url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default EventList;
