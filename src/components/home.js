// src/components/home.js

import React from "react";
import Slider from "react-slick";
import collection1 from "../assets/img/collection1.png";
import collection2 from "../assets/img/collection2.JPG";
import collection4 from "../assets/img/collection4.png";

class Home extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      initialSlide: 0,
      arrows: false,
      appendDots: (dots) => (
        <div
          style={{
            position: "fixed",
            padding: "10px",
            backgroundColor: "white",
            textAlign: "center",
            borderTop: "1px solid #e2e8f0",
            marginBottom: "25px",
          }}
        >
          <div style={{ flex: 1 }}> {dots} </div>
        </div>
      ),
      customPaging: (i) => {
        if (i === 0) {
          return (
            <div style={{ flex: 1 }}>
              <img
                className="w-12 lg:w-16"
                alt="collection1"
                src={collection1}
              />
            </div>
          );
        }
        if (i === 1) {
          return (
            <div style={{ flex: 1 }}>
              <img
                className="w-12 lg:w-16"
                alt="collection2"
                src={collection2}
              />
            </div>
          );
        }
        if (i === 2) {
          return (
            <div style={{ flex: 1 }}>
              <img
                className="w-12 lg:w-16"
                alt="collection4"
                src={collection4}
              />
            </div>
          );
        }
      },
    };

    return (
      <div className="mt-24">
        <h2>Home</h2>
        <Slider {...settings}>
          <div>
            <h3>0</h3>
          </div>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Home;

// 이와 같은 방식으로 Community, Mypage 컴포넌트도 생성
