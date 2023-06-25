import React from "react";

const Contents = ({ children }) => {
  return (
    <main id="main" role="main" className="container">
      {children}
    </main>
  );
};

export default Contents;
