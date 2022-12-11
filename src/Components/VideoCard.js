import React from "react";

export default function VideoCard({ thumbnail, caption, dp, Click }) {
  return (
    <div
      onClick={Click}
      className="flex flex-col justify-center lg:w-[20%] p-[5px] m-[5px]  rounded cursor-pointer hover:border-2 hover:border-gray-200 hover:rounded-2xl text-white  "
    >
      <img src={thumbnail} alt="img" className="rounded-lg " />
      <div className=" transition-all flex items-center mt-[10px] gap-[5px] ">
        {/* <img src={dp} className="rounded-full w-[10%]" alt="img" /> */}
        <p className="text-[40%]">{caption}</p>
      </div>
    </div>
  );
}
