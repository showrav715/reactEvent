import React from "react";
import EventList from "../components/EventList";
import { eventData } from "../data/data";
import SearchEvent from "../components/SearchEvent";
function Events() {
  return (
    <>
      <SearchEvent />
      <EventList events={eventData} />
    </>
  );
}

export default Events;
