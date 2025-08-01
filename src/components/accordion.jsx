import React from "react";
import data from "../assets/data.js";
import { useState } from "react";

const Accordion = () => {
  const [selectIndex, setselectIndex] = useState(null);

  function showIndex(id) {
    setselectIndex((prevIndex) => (prevIndex === id ? null : id));
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col gap-2 items-center w-1/2">
        <button className="bg-amber-800  ">Enable multiselection</button>
        {data.length === 0 && <p>Items no found</p>} {/* No items */}
        <ul className="">
          {data.map((item) => (
            <li key={item.id} className="bg-amber-800 m-2 min-w-[600px] ">
              <div className="flex justify-between p-2 my-2 cursor-pointer gap-2 hover:bg-amber-900 ">
                <h2 className="text-white text-xl">{item.title}</h2>{" "}
                <span className="text-xl text-white" onClick={() => showIndex(item.id)}>
                  +
                </span>
              </div>
              {selectIndex === item.id && (
                <p className="m-2 pb-4 transition-all duration-300 ease-in-out max-w-[600px]">{item.content}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
