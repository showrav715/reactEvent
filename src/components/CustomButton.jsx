import React from "react";
import { Link } from "react-router-dom";

function CustomButton({ title, link, handle }) {
  if (link) {
    return (
      <Link
        to={link}
        className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {title}
      </Link>
    );
  }
  return (
    <button
      type="button"
      onClick={handle}
      className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      {title}
    </button>
  );
}

export default CustomButton;
