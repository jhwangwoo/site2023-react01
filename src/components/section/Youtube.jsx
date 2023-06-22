import React from "react";
import { Link } from "react-router-dom";

const youtubeText = [
    {
        img: "/assets/images/youtube/youtube01.png",
        title: "유튜브이미지1",
        num: "dkelkt442",
    },
    {
        img: "/assets/images/youtube/youtube02.png",
        title: "유튜브이미지2",
        num: "dkelkt442",
    },
    {
        img: "/assets/images/youtube/youtube03.png",
        title: "유튜브이미지3",
        num: "dkelkt442",
    },
    {
        img: "/assets/images/youtube/youtube04.png",
        title: "유튜브이미지4",
        num: "dkelkt442",
    },
    {
        img: "/assets/images/youtube/youtube05.png",
        title: "유튜브이미지5",
        num: "dkelkt442",
    },
    {
        img: "/assets/images/youtube/youtube06.png",
        title: "유튜브이미지6",
        num: "dkelkt442",
    },
];
const youtubeTitle = {
    title: "과학 유튜브 소개",
    desc: "신비로운 과학을 재미있게 볼수 있는 유튜브를 소개 합니다!",
    link: "자세히보기",
};
function YoutubeDesc({ img, title, num }) {
    return (
        <div>
            <img src={img} alt={title} />
        </div>
    );
}

const Youtube = (props) => {
    return (
        <section id="youtubeSection" className={props.attr}>
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>{youtubeTitle.title}</h3>
                    <p>{youtubeTitle.desc}</p>
                    <Link to="/youtube" className="button-red">
                        {youtubeTitle.link}
                    </Link>
                </div>
                <div className="youtube__item">
                    {youtubeText.map((text, index) => (
                        <YoutubeDesc
                            key={index}
                            img={text.img}
                            title={text.title}
                            num={text.num}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Youtube;
