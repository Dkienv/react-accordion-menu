import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    } else {
      alert("Count cannot be negative");
    }
  };

  return (
    <>
      <div className="flex bg-gray-400 w-full h-screen justify-center items-center">
        <div className="flex flex-col w-60 h-80 bg-amber-700 justify-center items-center rounded-2xl">
          <h1 className="text-4xl font-bold pb-4">Hello World</h1>
          <h3 className="text-green-600 font-bold text-2xl"> {count}</h3>
          <div className="flex w-full justify-evenly pt-2 ">
            <button
              className="p-2 bg-blue-500 hover:bg-blue-600 cursor-pointer border-none rounded-sm text-white"
              onClick={handleIncrement}
            >
              Increment
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 border-0 rounded-sm p-2 cursor-pointer text-white"
              onClick={handleDecrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
