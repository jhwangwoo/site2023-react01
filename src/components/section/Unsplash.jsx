import React from "react";
import { Link } from "react-router-dom";

const unsplashTitle = {
    title: "과학 이미지 다운로드 추천",
    desc: "다양한 이미지를 다운로드 받고 싶다면 여기서 받으세요!",
    link: "자세히보기",
};

const unsplashText = [
    {
        img: "/assets/images/unsplash/unsplash01.png",
        title: "언스플이미지1",
    },
    {
        img: "/assets/images/unsplash/unsplash02.png",
        title: "언스플이미지2",
    },
    {
        img: "/assets/images/unsplash/unsplash03.png",
        title: "언스플이미지3",
    },
    {
        img: "/assets/images/unsplash/unsplash04.png",
        title: "언스플이미지4",
    },
    {
        img: "/assets/images/unsplash/unsplash05.png",
        title: "언스플이미지5",
    },
    {
        img: "/assets/images/unsplash/unsplash06.png",
        title: "언스플이미지6",
    },
];
function UnsplasrDesc({ img, title }) {
    return (
        <div>
            <img src={img} alt={title} />
        </div>
    );
}

const Unsplash = (props) => {
    return (
        <section id="unsplashSection" className={props.attr}>
            <div className="unsplash__inner container">
                <div className="unsplash__text">
                    <h3>{unsplashTitle.title}</h3>
                    <p>{unsplashTitle.desc}</p>
                    <Link to="/unsplash" className="button-blue">
                        {unsplashTitle.link}
                    </Link>
                </div>
                <div className="unsplash__item">
                    {unsplashText.map((text, index) => (
                        <UnsplasrDesc
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

export default Unsplash;
