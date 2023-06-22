import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header id="header" className={props.attr} role-level="1">
      <div className="header__inner container">
        <div className="header__logo">
          <Link to="/">
            jung <em>site</em>
          </Link>
        </div>
        <nav className="header__nav" role="navigation">
          <ul>
            <li>
              <Link to="/intro">소개</Link>
            </li>
            <li>
              <Link to="/port">과학자</Link>
            </li>
            <li>
              <Link to="/youtube">유튜브</Link>
            </li>
            <li>
              <Link to="/unsplash">이미지</Link>
            </li>
            <li>
              <Link to="/movie">영화</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
