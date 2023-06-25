import React from "react";

const youtubeTag = [
  { name: "물리학" },
  { name: "화학" },
  { name: "생물학" },
  { name: "천문학" },
];
const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="youtube__tag jamsil">
      <div>
        {youtubeTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YoutubeTag;
