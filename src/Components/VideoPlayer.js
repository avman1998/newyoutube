import React from "react";
import ReactPlayer from "react-player";
import { videosArr } from "./VideosPage";
import { clickId } from "./VideosPage";
export default function VideoPlayer() {
  const style = {
    borderRadius: "25px",
    width: "100%",
  };
  return (
    <div className=" flex justify-center items-center p-[10px] ">
      {videosArr.length !== 0 && (
        <ReactPlayer
          url={`http://www.youtube.com/watch?v=${videosArr[clickId]?.id?.videoId}`}
          sandbox="allow-presentation"
          controls={true}
          volume={1}
          playing={true}
          style={style}
          width="500px"
        />
      )}
    </div>
  );
}
