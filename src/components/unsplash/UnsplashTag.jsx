import React from "react";
const unsplashTag = [
  { name: "Physics" },
  { name: "Chemistry" },
  { name: "Biology" },
  { name: "Astronomy" },
];
const UnsplashTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="unsplash__tag container jamsil">
      <div>
        {unsplashTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnsplashTag;
