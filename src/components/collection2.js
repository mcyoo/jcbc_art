import React from "react";
import Slider from "react-slick";
import "../assets/App.css";
import jcbc_logo from "../assets/img/logo.jpg";
import collection1 from "../assets/img/collection1.jpeg";
import collection2 from "../assets/img/collection2.jpeg";
import collection3 from "../assets/img/collection3.jpg";
import good from "../assets/img/good.jpg";
import poster from "../assets/img/poster.png";
import jeseogy from "../assets/img/jeseogy.JPG";
import throwball from "../assets/video/throw.MOV";
import miniplay from "../assets/video/miniplay.MOV";
import { LazyLoadImage } from "react-lazy-load-image-component";

class Collection2 extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }

  render() {
    const { isLoading } = this.state;

    const settings = {
      adaptiveHeight: true,
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      initialSlide: 2,
      className: "center",
      centerMode: true,
      centerPadding: "16px",
      visibleByDefault: true,
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
              <img className="w-10 lg:w-16" alt="poster" src={poster} />
            </div>
          );
        }
        if (i === 1) {
          return (
            <div style={{ flex: 1 }}>
              <img
                className="w-10 lg:w-16"
                alt="collection1"
                src={collection1}
              />
            </div>
          );
        }
        if (i === 2) {
          return (
            <div style={{ flex: 1 }}>
              <img
                className="w-10 lg:w-16"
                alt="collection2"
                src={collection2}
              />
            </div>
          );
        }
        if (i === 3) {
          return (
            <div style={{ flex: 1 }}>
              <img
                className="w-10 lg:w-16"
                alt="collection3"
                src={collection3}
              />
            </div>
          );
        }
        if (i === 4) {
          return <div style={{}}></div>;
        }
        if (i === 5) {
          return <div style={{}}></div>;
        }
        if (i === 6) {
          return <div style={{}}></div>;
        }
        if (i === 7) {
          return <div style={{}}></div>;
        }
        if (i === 8) {
          return <div style={{}}></div>;
        }
      },
    };

    return (
      <div className="">
        {isLoading ? (
          <div className="w-screen overflow-x-hidden">
            <div className="pt-0">
              <div className="px-2">
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                  <div className="flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md">
                      <div className="w-2/3 h-6 bg-gray-200 rounded-full animate-pulse mb-4"></div>
                      <div className="w-72 h-80 md:w-96 md:h-96 bg-gray-200 animate-pulse"></div>
                      <div className="mt-8 h-32 w-full space-y-3">
                        <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-1/2 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <Slider {...settings}>
              <div className="w-screen overflow-x-hidden">
                <div className="pt-0">
                  <div className="px-2">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                      <div className="flex">
                        <div className="w-full">
                          <div className="flex justify-between items-center p-3">
                            <div className="flex flex-row items-center">
                              <span className="font-bold mr-1 text-sm md:text-lg">
                                제주클린보이즈클럽 전시회
                              </span>
                            </div>
                          </div>
                          <div>
                            <LazyLoadImage alt="poster" src={poster} />
                          </div>
                          <div className="mx-4 mb-4 mt-6">
                            <span className="text-sm md:text-lg md:leading-8">
                              제주클린보이즈클럽은 2020년 10월 부터 활동을 시작
                              했으며, 매일 아침 8시에 집 근처 해안가 쓰레기를
                              줍고 있습니다. 30-40분 내외 로 쓰레기를 주우며,
                              아침 운동 처럼 매일 진행하고 있습니다. 저희 활동
                              사진을 인스타그램에 올리고 있으며, 참여 연락
                              주신분들 과도 함께 쓰레기를 줍고 있습니다.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-screen overflow-x-hidden">
                <div className="pt-0">
                  <div className="px-2">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                      <div className="flex">
                        <div className="w-full">
                          <div className="flex justify-between items-center p-3">
                            <div className="flex flex-row items-center">
                              <span className="font-bold mr-1 text-sm md:text-lg">
                                작품명 : 플라스틱 바스켓 화분, 2021.09
                              </span>
                            </div>
                            <div className="pr-2">
                              {" "}
                              <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <LazyLoadImage
                              alt="collection1"
                              src={collection1}
                            />
                          </div>
                          <div className="p-4 flex justify-between items-center">
                            <div className="flex flex-row items-center">
                              <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i>
                            </div>
                            <div>
                              <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                            </div>
                          </div>

                          <div className="mx-4 mb-4">
                            <span className="text-sm">
                              어선에서 쓸 법한 흰색 트레이가 버려져 있다. 뭐가
                              담겼을지 모를, 쓰임을 다한 트레이에 흙을 채우고,
                              식물을 심었다.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-screen overflow-x-hidden">
                <div className="pt-0">
                  <div className="px-2">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                      <div className="flex">
                        <div className="w-full">
                          <div className="flex justify-between items-center p-3">
                            <div className="flex flex-row items-center">
                              <span className="font-bold mr-1 text-sm md:text-lg">
                                작품명 : 돌틈에 라이터, 2021.09
                              </span>
                            </div>
                            <div className="pr-2">
                              {" "}
                              <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <LazyLoadImage
                              alt="collection2"
                              src={collection2}
                            />
                          </div>
                          <div className="p-4 flex justify-between items-center">
                            <div className="flex flex-row items-center">
                              <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i>
                            </div>
                            <div>
                              <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div className="mx-4 mb-4">
                            <span className="text-sm">
                              제주도는 화산섬 이다. 돌 틈으로 용암이 흘러
                              내린다. 자세히는 보지 말자. 멀리서 봐야 아름답다.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-screen overflow-x-hidden">
                <div className="pt-0">
                  <div className="px-2">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                      <div className="flex">
                        <div className="w-full">
                          <div className="flex justify-between items-center p-3">
                            <div className="flex flex-row items-center">
                              <span className="font-bold mr-1 text-sm md:text-lg">
                                작품명 : 크리스마스 트리, 2021.09
                              </span>
                            </div>
                            <div className="pr-2">
                              {" "}
                              <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <LazyLoadImage
                              alt="collection3"
                              src={collection3}
                            />
                          </div>
                          <div className="p-4 flex justify-between items-center">
                            <div className="flex flex-row items-center">
                              <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i>
                            </div>
                            <div>
                              <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div className="mx-4 mb-4">
                            <span className="text-sm">
                              다양한 색깔의 부표들이 버려져 있다. 색깔 별로
                              모아서 크리스마스 트리 처럼 형형색색의 부표를
                              걸어두었다.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-screen overflow-x-hidden font-sans">
                <div class="flex justify-center items-center p-6">
                  <div class="bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                    <h4
                      id="name"
                      class="text-lg font-semibold text-center mb-4 font-sans"
                    >
                      쓰레기 실명제
                    </h4>
                    <div id="header" class="flex items-center mb-4">
                      <img
                        alt="avatar"
                        class="w-20 border-2 border-gray-300"
                        src={jeseogy}
                      />
                      <div id="header-text" class="leading-5 ml-6 sm">
                        <h4 id="name" class="text-lg font-semibold">
                          유제석
                        </h4>
                        <h5 id="job" class="font-semibold text-sm">
                          평범한 시민
                        </h5>
                      </div>
                    </div>
                    <div class="font-semibold text-sm text-gray-900">
                      <div>성별 : 남성</div>
                      <div>나이 : 27</div>
                      <div>전화번호 : +82 10-4737-4115</div>
                      <div>쓰레기 좌표 : 33.468866, 126.312406</div>
                      <div>
                        쓰레기를 발견할 시, 위에 번호로 연락 주시기 바랍니다.
                        감사합니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-screen overflow-x-hidden">
                <div className="pt-0">
                  <div className="px-2">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                      <div className="flex">
                        <div className="w-full">
                          <div className="flex justify-between items-center p-3">
                            <div className="flex flex-row items-center">
                              <img
                                src={jcbc_logo}
                                className="rounded-full"
                                width="40"
                                alt="jcbc_logo"
                              />
                              <div className="flex flex-row items-center ml-2">
                                {" "}
                                <span className="font-bold mr-1 text-sm md:text-lg">
                                  Fire in the hole!
                                </span>
                              </div>
                            </div>
                            <div className="pr-2">
                              {" "}
                              <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <video
                              muted="muted"
                              controls
                              loop
                              preload="auto"
                              autoplay="autoplay"
                            >
                              <source src={throwball}></source>
                            </video>
                          </div>
                          <div className="p-4 flex justify-between items-center">
                            <div className="flex flex-row items-center">
                              <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i>
                            </div>
                            <div>
                              <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div className="mx-4 mb-4">
                            <span className="text-sm">
                              부표를 최대한 멀리 던집니다..!
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-screen overflow-x-hidden">
                <div className="pt-0">
                  <div className="px-2">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                      <div className="flex">
                        <div className="w-full">
                          <div className="flex justify-between items-center p-3">
                            <div className="flex flex-row items-center">
                              <img
                                src={jcbc_logo}
                                className="rounded-full"
                                width="40"
                                alt="jcbc_logo"
                              />
                              <div className="flex flex-row items-center ml-2">
                                {" "}
                                <span className="font-bold mr-1 text-sm md:text-lg">
                                  쿵짝짝 쿵짝
                                </span>
                              </div>
                            </div>
                            <div className="pr-2">
                              {" "}
                              <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <video
                              muted="muted"
                              controls
                              loop
                              preload="auto"
                              autoplay="autoplay"
                            >
                              <source src={miniplay}></source>
                            </video>
                          </div>
                          <div className="p-4 flex justify-between items-center">
                            <div className="flex flex-row items-center">
                              <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i>
                            </div>
                            <div>
                              <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div className="mx-4 mb-4">
                            <span className="text-sm">드럼도 치고요.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-screen overflow-x-hidden">
                <div className="pt-0">
                  <div className="px-2">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                      <div className="flex">
                        <div className="w-full">
                          <div className="flex justify-between items-center p-3">
                            <div className="flex flex-row items-center">
                              <img
                                src={jcbc_logo}
                                className="rounded-full"
                                width="40"
                                alt="jcbc_logo"
                              />
                              <div className="flex flex-row items-center ml-2">
                                {" "}
                                <span className="font-bold mr-1 text-sm md:text-lg">
                                  Good
                                </span>
                              </div>
                            </div>
                            <div className="pr-2">
                              {" "}
                              <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <img src={good} className="" alt="good" />
                          </div>
                          <div className="p-4 flex justify-between items-center">
                            <div className="flex flex-row items-center">
                              <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
                              <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i>
                            </div>
                            <div>
                              <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div className="mx-4 mb-4">
                            <span className="text-sm">
                              하늘에 굿을 지냅니다. 깨끗한 제주바당을 위해서요!
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="flex-col md:text-lg text-sm text-right mr-5 mb-36 border-t border-gray-400 md:mx-48 mx-4 mt-8">
              <div className="mt-4">제주클린보이즈클럽 작품 전시회</div>
              <div>2021.10</div>
              <div>애월읍 신엄리 2841-14 올레16코스</div>
              <div>📧 mcyoo247@gmail.com</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Collection2;
