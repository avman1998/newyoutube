import React from "react";
import VideosPage from "./VideosPage";
export default function Intro() {
  return (
    <div className="min-h-[100%] leading-5 mx-[15px] text-3xl bg-black text-white">
      <nav className="  text-center my-[15px] bg-white text-[90%] py-[20px] rounded text-black">
        📽️ Cool Video Player 📽️
      </nav>
      <VideosPage />
    </div>
  );
}
