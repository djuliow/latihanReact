import React from "react";
import HelloMoon from "../HelloMoon";

const HelloWorld = () => {
  let hello = "this is a child component";
  return (
    <>
      <div className="text-[50px] bg-red-500 m-10 p-10 font-serif">
        {hello}
        <HelloMoon />
      </div>
    </>
  );
};

export default HelloWorld;