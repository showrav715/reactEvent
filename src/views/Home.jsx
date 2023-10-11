import React from "react";
import EventList from "../components/EventList";
import { FeaturedEvent } from "../data/data";
import SearchEvent from "../components/SearchEvent";
function Home() {
  const featuresData = FeaturedEvent();
  console.log(featuresData);
  return (
    <>
      <SearchEvent />
      <EventList events={featuresData} />
    </>
  );
}

export default Home;
