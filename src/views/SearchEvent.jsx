import React from "react";
import { useParams } from "react-router-dom";
import { filterData } from "./../data/data";
import EventList from "../components/EventList";
function SearchEvent() {
  const params = useParams();
  const { year, month } = params;
  const searchData = filterData(year, month);
  return (
    <>
      <div className="text-center">
        <div className="font-bold">
          Search Query : Month : {month} , Year : {year}
        </div>
      </div>
      <EventList events={searchData} />
    </>
  );
}

export default SearchEvent;
