import React from "react";
import data from "../assets/data.js";
import { useState } from "react";

const Accordion = () => {
  const [selectIndex, setselectIndex] = useState(null);
  const [multiSelection, setmultiSelection] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  function handleSingleSelection(id) {
    setselectIndex((prevIndex) => (prevIndex === id ? null : id));
  }
  function handleMultiSelection(id) {
    setSelectedItems((prevItems) =>
      prevItems.includes(id) ? prevItems.filter((item) => item !== id) : [...prevItems, id]
    );
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col gap-2 items-center w-1/2">
        <button
          className="bg-amber-800 px-4 py-2 text-white rounded-2xl hover:bg-amber-700 cursor-pointer"
          onClick={() => setmultiSelection(!multiSelection)}
        >
          Enable multiselection
        </button>
        {data.length === 0 && <p>Items no found</p>} {/* No items */}
        <ul className="">
          {data.map((dataItem) => (
            <li key={dataItem.id} className="bg-amber-800 m-2 min-w-[600px] ">
              <div className="flex justify-between p-2 my-2 cursor-pointer gap-2 hover:bg-amber-900 ">
                <h2 className="text-white text-xl">{dataItem.title}</h2>{" "}
                <span
                  className="text-xl text-white"
                  onClick={
                    multiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)
                  }
                >
                  +
                </span>
              </div>
              {multiSelection
                ? selectedItems.indexOf(dataItem.id) !== -1 && (
                    <p className="m-2 pb-4 transition-all duration-300 ease-in-out max-w-[600px]">{dataItem.content}</p>
                  )
                : selectIndex === dataItem.id && (
                    <p className="m-2 pb-4 transition-all duration-300 ease-in-out max-w-[600px]">{dataItem.content}</p>
                  )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
