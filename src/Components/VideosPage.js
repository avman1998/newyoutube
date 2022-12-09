import React, { useState } from "react";
import VideoCard from "./VideoCard";
import VideoPlayer from "./VideoPlayer";

import { querySearch } from "./input";

export let videosArr = [];
export let clickId;

export default function VideosPage() {
  const [videos, setVideos] = useState([]);
  const [query, SetQuery] = useState("");
  // const [querySearch, setQuerySearch] = useState("");
  const [clickIndex, setClickIndex] = useState(0);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a760903f0dmsh0ff0c07d17f9a99p130fffjsn4c276a048d96",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  function onhandleSearch(e) {
    e.preventDefault();
    if (query) {
      fetch(
        `https://youtube-v31.p.rapidapi.com/search?q=${query}&part=snippet%2Cid&regionCode=US&maxResults=48&order=date`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          console.log(response.items);
          setVideos(response?.items);
        })
        .catch((err) => console.error(err));
    }
  }
  console.log(videos);
  console.log(`query search-${querySearch}`);
  videosArr = [...videos];
  clickId = clickIndex;
  return (
    <div className=" flex flex-col justify-center ">
      <form className="flex md:flex-row flex-col p-[5px] justify-center gap-[15px] max-w-[100vw]">
        <input
          placeholder="Search here"
          value={query}
          onChange={(e) => SetQuery(e.target.value)}
          className="bg-black border-2 rounded text-[60%] py-[5px] px-[10px]"
        />
        <button
          className="text-[50%] py-[5px] px-[10px] font-semibold bg-white rounded text-black"
          onClick={(e) => onhandleSearch(e)}
          type="submit"
        >
          Search
        </button>
      </form>
      {videos.length !== 0 && <VideoPlayer />}

      <div className="flex flex-col items-baseline md:flex-row flex-wrap justify-between   min-w-full ">
        {videos?.map((video, index) => {
          return (
            <VideoCard
              thumbnail={video?.snippet?.thumbnails?.high?.url}
              Click={() => setClickIndex(index)}
              caption={video?.snippet?.title}
            />
          );
        })}
      </div>
    </div>
  );
}
