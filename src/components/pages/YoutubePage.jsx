import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import YoutubeSearch from "../yotube/YoutubeSearch";
import YoutubeTag from "../yotube/YoutubeTag";
import YoutubeCont from "../yotube/YoutubeCont";

const YoutubePage = () => {
  const [youtubes, setYoutubes] = useState([]); //[인지한거저장공간, 몇번마다인지] = 사용

  const search = async (query) => {
    await fetch(
      //async await비동기 처리
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&key=AIzaSyA574D8uxBhHYpAp6Xu760fh7tV3Fitgh8`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=science&type=video&key=AIzaSyA574D8uxBhHYpAp6Xu760fh7tV3Fitgh8"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []); //저장방법

  return (
    <Contents>
      <ContTitle title="youtube" />
      <YoutubeSearch onSearch={search} />
      <YoutubeTag onSearch={search} />
      <YoutubeCont youtubes={youtubes} />
    </Contents>
  );
};

export default YoutubePage;
