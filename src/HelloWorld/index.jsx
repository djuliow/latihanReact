import React from "react";
import HelloMoon from "../HelloMoon";

//tipe data props adalah object

const HelloWorld = ({text}) => {
  return (
    <>
      <div className="text-[50px] bg-red-500 m-10 p-10 font-serif">
        {text}
        <HelloMoon />
      </div>
    </>
  );
};

export default HelloWorld;