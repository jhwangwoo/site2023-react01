import React from "react";
// const portcont = [
//   {
//     portImg: "../../",
//     iconImg: "../assets/images/member/member48.svg",
//     link: "https://ko.wikipedia.org/wiki/%EC%95%84%EC%9D%B4%EC%9E%91_%EB%89%B4%ED%84%B4",
//     title: "이사크 뉴턴 (Isaac Newton)",
//     desc: "이사크 뉴턴은 17세기 영국의 물리학자이며, 현대 과학의 아버지로 알려져 있습니다. 그의 가장 유명한 업적은 만유인력의 법칙과 운동의 법칙을 발견한 것입니다. 이를 통해 뉴턴은 중력의 원리와 물체의 운동을 수학적으로 설명하였으며, 그의 연구는 현대 물리학의 기초를 다지는 역할을 했습니다. 뉴턴의 작품 '자연철학의 수학적 원리' 는 우주의 운동과 중력에 대한 이론적인 기반을 제시한 중요한 책입니다.",
//   },
//   {
//     portImg: "../assets/images/port/portbg02.png",
//     link: "https://namu.wiki/w/%EB%A7%88%EB%A6%AC%20%ED%80%B4%EB%A6%AC",
//     title: "마리 퀴리 (Marie Curie)",
//     desc: "마리 퀴리는 폴란드 태생의 물리학자로, 방사능 현상과 퀴리안 원소 발견으로 유명합니다. 그녀는 남편인 피에르 퀴리와 함께 방사능을 연구하고 방사선학의 개척자로 알려져 있습니다. 마리 퀴리는 1903년에 노벨 물리학상을 수상하였으며, 이는 노벨상을 받은 최초의 여성 과학자로서의 업적입니다. 그녀는 과학적인 업적뿐만 아니라 여성과학자들에게 영감을 주는 모범적인 인물로 알려져 있습니다.",
//   },
//   {
//     portImg: "../assets/images/port/portbg03.png",
//     link: "https://namu.wiki/w/%EC%95%8C%EB%B2%A0%EB%A5%B4%ED%8A%B8%20%EC%95%84%EC%9D%B8%EC%8A%88%ED%83%80%EC%9D%B8",
//     title: "알버트 아인슈타인 (Albert Einstein)",
//     desc: "독일 태생의 이론 물리학자로, 상대성 이론과 질량-에너지 관계를 설명한 업적으로 유명합니다. 그의 이론은 물리학과 우주학의 패러다임을 바꾸는 역할을 했으며, E=mc²로 표현되는 질량과 에너지의 상호 변환에 대한 개념은 현대 물리학에서 중요한 개념입니다.",
//   },
//   {
//     portImg: "../assets/images/port/portbg04.png",
//     iconImg: "../assets/images/member/member07.svg",
//     link: "https://en.wikipedia.org/wiki/Niels_Bohr",
//     title: "니콜라스 쿱른 (Niels Bohr)",
//     desc: "덴마크 출신의 물리학자로, 원자 구조와 양자역학의 이해에 큰 기여를 했습니다. 쿱른은 원자의 전자 에너지 수준과 전자의 궤도 운동에 대한 이론적인 설명인 '보어의 원자 모형'을 제시하여 원자 물리학의 기초를 다지는 데 일조했습니다. 그의 업적으로 1922년 노벨 물리학상을 수상하였습니다.",
//   },
//   {
//     portImg: "../assets/images/port/portbg05.png",
//     iconImg: "../assets/images/member/member08.svg",
//     link: "https://namu.wiki/w/%EC%95%8C%EB%A0%89%EC%82%B0%EB%8D%94%20%ED%94%8C%EB%A0%88%EB%B0%8D",
//     title: "알렉산더 플레밍 (Alexander Fleming)",
//     desc: "스코틀랜드 출신의 의학 박사로, 세균학과 항생물질의 발견으로 유명합니다. 플레밍은 우연히 발견한 펜실린이라는 항생물질을 통해 세균에 대한 치료 가능성을 제시하였으며, 이는 현대 의약 분야에서 큰 영향을 미쳤습니다.",
//   },
//   {
//     portImg: "../assets/images/port/portbg06.png",
//     iconImg: "../assets/images/member/member09.svg",
//     link: "https://namu.wiki/w/%EB%8B%88%EC%BD%9C%EB%9D%BC%20%ED%85%8C%EC%8A%AC%EB%9D%BC",
//     title: "니콜라 테슬라 (Nikola Tesla)",
//     desc: "세르비아 출신의 미국 과학자로, 전기공학과 무선 통신 분야에서의 기초 연구로 유명합니다. 테슬라는 교류 전력 시스템의 개발과 무선 전력 전송에 대한 실험을 통해 현대 전기공학의 발전에 크게 기여하였습니다.",
//   },
//   {
//     portImg: "../assets/images/port/portbg06.png",
//     iconImg: "../assets/images/member/member09.svg",
//     link: "https://namu.wiki/w/%EB%A1%9C%EC%A0%80%20%ED%8E%9C%EB%A1%9C%EC%A6%88",
//     title: "로저 펜로즈 (Roger Penrose)",
//     desc: "영국의 수학자이자 물리학자로, 상대성 이론과 블랙홀 이론에 대한 연구로 알려져 있습니다. 그는 블랙홀 내부에서의 시공간 구조를 탐구하는 연구를 진행하였으며, 이는 우주와 시간에 대한 이해를 혁신적으로 바꾸는 역할을 했습니다. 그의 업적으로 2020년 노벨 물리학상을 수상하였습니다.",
//   },
//   {
//     portImg: "../assets/images/port/portbg06.png",
//     iconImg: "../assets/images/member/member09.svg",
//     link: "https://namu.wiki/w/%EC%9E%A5%ED%94%BC%EC%97%90%EB%A5%B4%20%EC%86%8C%EB%B0%94%EC%A3%BC",
//     title: "장 피에르 소바주 (Jean-Pierre Sauvage)",
//     desc: "프랑스의 화학자로, 분자 기계와 나노기계의 개발로 알려져 있습니다. 소바주는 분자 간의 연결과 이동이 가능한 분자 기계를 개발하여 나노기술 분야에서의 혁신적인 발견으로 인정받았으며, 이를 통해 2016년 노벨 화학상을 수상하였습니다.",
//   },
//   {
//     portImg: "../assets/images/port/portbg06.png",
//     iconImg: "../assets/images/member/member09.svg",
//     link: "https://ko.wikipedia.org/wiki/%EC%A0%9C%EC%9E%84%EC%8A%A4_D._%EC%99%93%EC%8A%A8",
//     title: "제임스 왓슨 (James Watson)",
//     desc: "DNA의 구조를 해독한 미국의 생화학자 입니다. 왓슨은  프랜시스 크릭과 함께 1953년에 DNA의 이중 나선 구조를 제안하여 유전학과 생물학의 기초를 다지는 데 결정적인 역할을 했습니다. 그들의 연구는 유전 정보 전달과 진화에 대한 이해를 크게 발전시켰으며, 이후 유전체 연구와 생명 과학의 발전에 영향을 미쳤습니다.",
//   },
//   {
//     portImg: "../assets/images/port/portbg06.png",
//     iconImg: "../assets/images/member/member09.svg",
//     link: "https://namu.wiki/w/%EC%95%A8%EB%9F%B0%20%ED%8A%9C%EB%A7%81",
//     title: "알란 튜링 (Alan Turing)",
//     desc: "영국의 수학자, 논리학자, 컴퓨터 과학자로, 컴퓨터 과학과 인공지능 분야에서의 업적으로 알려져 있습니다. 튜링은 튜링 기계라는 개념을 제안하여 계산 가능성과 컴퓨터의 작동 원리에 대한 이론적 기초를 마련하였으며, 이는 컴퓨터 과학의 탄생과 발전에 큰 역할을 했습니다. 또한, 그는 제2차 세계대전 중 암호 해독을 위한 암호 해독기 '엔니그마'의 해독을 성공시켜 영국의 전략적인 우위를 제공한 공로로도 알려져 있습니다.",
//   },
// ];
const PortCont = () => {
  return (
    <div className="port__inner">
      <div className="port__img">
        <img src="../../assets/images/port/AlanTuring.jpg" alt="dddddd" />
      </div>
    </div>
  );
};

export default PortCont;
