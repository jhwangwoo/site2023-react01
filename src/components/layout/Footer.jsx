import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <footer id="footer" className={props.attr} role-lever="3">
            <div className="footer__inner container">
                <div className="footer__text">
                    <h5>Jung hwang woo</h5>
                    <p>
                        궁금한 사항의 메일로 연락 해주세요!
                        <br />
                        <Link to="mailto:ghkddn132@gmail.com">
                            ghkddn132@gmail.com
                        </Link>
                    </p>
                    <ul className="sns">
                        <li>
                            <Link to="/">
                                <span className="ir"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="ir"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="ir"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="ir"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="ir"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__menu">
                    <div>
                        <h4>사이트</h4>
                        <ul>
                            <li>
                                <Link to="/">웹표준 사이트</Link>
                            </li>
                            <li>
                                <Link to="/">반응형 사이트</Link>
                            </li>
                            <li>
                                <Link to="/">패럴랙스 사이트</Link>
                            </li>
                            <li>
                                <Link to="/">포트폴리오 사이트</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>유형</h4>
                        <ul>
                            <li>
                                <Link to="/">이미지 유형</Link>
                            </li>
                            <li>
                                <Link to="/">카드 유형</Link>
                            </li>
                            <li>
                                <Link to="/">이미지/텍스트 유형</Link>
                            </li>
                            <li>
                                <Link to="/">배너 유형</Link>
                            </li>
                            <li>
                                <Link to="/">텍스트 유형</Link>
                            </li>
                            <li>
                                <Link to="/">푸터 유형</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>스크립트</h4>
                        <ul>
                            <li>
                                <Link to="/">검색 이펙트</Link>
                            </li>
                            <li>
                                <Link to="/">퀴즈 이펙트</Link>
                            </li>
                            <li>
                                <Link to="/">마우스 이펙트</Link>
                            </li>
                            <li>
                                <Link to="/">슬라이드 이펙트</Link>
                            </li>
                            <li>
                                <Link to="/">패랠랙스 이펙트</Link>
                            </li>
                            <li>
                                <Link to="/">게임 이팩트</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>레퍼런스</h4>
                        <ul>
                            <li>
                                <Link to="/">CSS</Link>
                            </li>
                            <li>
                                <Link to="/">FONTS</Link>
                            </li>
                            <li>
                                <Link to="/">BLOG</Link>
                            </li>
                            <li>
                                <Link to="/">REFERENCE</Link>
                            </li>
                            <li>
                                <Link to="/">TUTORIAL </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    Copyright 2023. All Rights Reserved. - Designed by Jung
                    hwang woo
                </div>
            </div>
        </footer>
    );
};

export default Footer;
