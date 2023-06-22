import React from "react";
const introtText = [
    {
        iconClass: "icon-bg1",
        title: "물리학",
        desc: "물질의 성질, 운동, 에너지, 전자기학 등을 연구하는 학문입니다. 물리학은 우주의 구조와 동작,원자와 입자의 구성 등에 대한 이해를 통해 기술 발전에도 많은 영향을 미칩니다.",
    },
    {
        iconClass: "icon-bg2",
        title: "화학",
        desc: "물질의 성질, 구조, 구성, 반응 등을 연구하는 학문입니다. 화학은 우리 주변의 물질의 조합과 변화를 이해하고, 신약 개발, 재료 공학, 환경 보호 등에 중요한 역할을 합니다.",
    },
    {
        iconClass: "icon-bg3",
        title: "생물학",
        desc: "생명체의 구조, 기능, 발생, 진화 등을 연구하는 학문입니다. 생물학은 생명체의 동작 원리를 이해하고, 질병 치료, 식물 육성, 유전자 조작 등 다양한 분야에서 응용되고 있습니다.",
    },
    {
        iconClass: "icon-bg4",
        title: "천문학",
        desc: "우주와 천체들의 구조, 운동, 성질 등을 연구하는 학문입니다. 천문학은 별과 은하의 형성과 진화, 우주의 기원과 구조에 대한 이해를 통해 우주항공 기술과 우주 탐사에도 영향을 미칩니다.",
    },
];
const introTitle = {
    span: "science",
    title: (
        <h3>
            과학의 <br />
            분야 소개
        </h3>
    ),
    desc: (
        <p>
            과학은 여러 가지 분야로 나뉘어지며,
            <br /> 다양한 주제와 문제를 다룹니다.
            <br /> 주요한 과학 분야의 일부는 다음과 같습니다.
        </p>
    ),
};

function IntroDesc({ iconClass, title, desc }) {
    return (
        <div>
            <h4 className={iconClass}>{title}</h4>
            <p>{desc}</p>
        </div>
    );
}

function IntroSection(props) {
    return (
        <section id="introSection" className={props.attr}>
            <h3 className="blind">과학의 분야 소개</h3>
            <div className="intro__inner container">
                <div className="intro__title">
                    <span>{introTitle.span}</span>
                    <>{introTitle.title}</>
                    <>{introTitle.desc}</>
                </div>
                <div className="intro_desc">
                    {introtText.map((text, index) => (
                        <IntroDesc
                            key={index} //반복문쓸때는 인덱스값을 키로 해줘야함
                            iconClass={text.iconClass}
                            title={text.title}
                            desc={text.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default IntroSection;
