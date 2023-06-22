import React from "react";

const YoutubeItem = ({ youtube }) => {
    return (
        <li>
            <img src={youtube.snippet.thumbnails.medium.url} alt="youtube" />
            <span>{youtube.snippet.title}</span>
        </li>
    );
};

const YoutubeCont = ({ youtubes }) => {
    return (
        <div className="youtube__cont container mb50">
            <ul>
                {youtubes.map((youtube, index) => (
                    <YoutubeItem key={index} youtube={youtube} />
                ))}
            </ul>
        </div>
    );
};

export default YoutubeCont;
