import React from "react";
import { Link } from "react-router-dom";
const portTitle = {
  title: "과학자 소개",
  desc: "과학자들은 지식의 산다리와 혁신의 선구자로, 인류의 이해를 넓히고 세계를 변화시키는 역할을 수행합니다.",
};
const portText = [
  {
    portImg: "../assets/images/port/AlbertEinstein.png",
    iconImg: "../assets/images/member/member48.svg",
    title: "알버트 아인슈타인",
    desc: "상대성 이론",
  },
  {
    portImg: "../assets/images/port/MarieCurie.png",
    iconImg: "../assets/images/member/member30.svg",
    title: "마리 퀴리",
    desc: "방사선의 성질에 대한 연구",
  },
  {
    portImg: "../assets/images/port/isaacNewton.png",
    iconImg: "../assets/images/member/member40.svg",
    title: "이사크 뉴턴",
    desc: "만유인력의 법칙",
  },
  {
    portImg: "../assets/images/port/NikolaTesla.png",
    iconImg: "../assets/images/member/member45.svg",
    title: "니콜라 테슬라",
    desc: "교류 전력 시스템의 개발",
  },
  {
    portImg: "../assets/images/port/NielsBohr.png",
    iconImg: "../assets/images/member/member41.svg",
    title: "니콜라스 쿱른",
    desc: "원자 구조와 양자역학",
  },
  {
    portImg: "../assets/images/port/Jean-PierreSauvage.png",
    iconImg: "../assets/images/member/member11.svg",
    title: "장 피에르 소바주",
    desc: "분자 기계와 나노기계의 개발",
  },
];
function PortDesc({ portImg, iconImg, title, desc }) {
  return (
    <div className="port">
      <figure className="port__header">
        <img src={portImg} alt={title} />
      </figure>
      <div className="port__body">
        <span>
          <img src={iconImg} alt={title} />
        </span>
        <div className="desc">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

const Portfolio = (props) => {
  return (
    <section id="portSection" className={props.attr}>
      <h3>{portTitle.title}</h3>
      <p>{portTitle.desc}</p>
      <div className="port__inner container">
        <div className="port__btn">
          <ul>
            <li>
              <Link to="/port">더 보기</Link>
            </li>
          </ul>
        </div>
        <div className="port__cont">
          {portText.map((text, index) => (
            <PortDesc
              key={index}
              portImg={text.portImg}
              iconImg={text.iconImg}
              title={text.title}
              desc={text.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
