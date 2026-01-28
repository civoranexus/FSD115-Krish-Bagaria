import React from "react";
import back1 from "../assets/girl 23.jpg";
import back2 from "../assets/kidswear3.jpg";
import back3 from "../assets/shirtman4.jpg";
import back4 from "../assets/shirtwomen222.jpg";

const Backgound = ({ heroCount }) => {
  if (heroCount === 0) {
    return (
      <img
        src={back1}
        alt=""
        className="w-[50%] h-full float-right overflow-auto object-cover"
      />
    );
  } else if (heroCount === 1) {
    return (
      <img
        src={back2}
        alt=""
        className="w-[50%] h-full float-right overflow-auto object-cover"
      />
    );
  } else if (heroCount === 2) {
    return (
      <img
        src={back3}
        alt=""
        className="w-[50%] h-full float-right overflow-auto object-cover"
      />
    );
  } else if (heroCount === 3) {
    return (
      <img
        src={back4}
        alt=""
        className="w-[50%] h-full float-right overflow-auto object-cover"
      />
    );
  }
};

export default Backgound;
