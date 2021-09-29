import React from "react";
import Slider from "react-slick";
import "../assets/App.css";
import jcbc_logo from "../assets/img/logo.jpg";
import collection1 from "../assets/img/collection1.jpeg";
import collection2 from "../assets/img/collection2.JPG";
import collection4 from "../assets/img/collection4.png";
import good from "../assets/img/good.JPG";
import poster from "../assets/img/poster.png";
import throwball from "../assets/video/throw.MOV";
import miniplay from "../assets/video/miniplay.MOV";

class Collection4 extends React.Component {
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
      dots: true,
      arrows: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      initialSlide: 5,
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
              <img className="w-12 lg:w-16" alt="poster" src={poster} />
            </div>
          );
        }
        if (i === 1) {
          return (
            <div style={{ flex: 1 }}>
              <img className="w-12 lg:w-16" alt="jcbc_logo" src={jcbc_logo} />
            </div>
          );
        }
        if (i === 2) {
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
        if (i === 3) {
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
        if (i === 4) {
          return <div style={{}}></div>;
        }
        if (i === 5) {
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
                              <img
                                src={jcbc_logo}
                                className="rounded-full"
                                width="40"
                                alt="jcbc_logo"
                              />
                              <div className="flex flex-row items-center ml-2">
                                {" "}
                                <span className="font-bold mr-1 text-sm md:text-lg">
                                  제주클린보이즈 클럽 전시회
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <img
                              src={poster}
                              className=""
                              alt="poster"
                            />
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
                                  제주클린보이즈클럽
                                </span>
                              </div>
                            </div>
                            <div className="pr-2">
                              {" "}
                              <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div className="mx-4 mb-4">
                            <span className="text-sm md:text-lg md:leading-8">
                              저희 제주클린보이즈클럽은 2020년 10월부터 지금까지 매일 아침 8시에 집 근처 해안가에 쓰레기를 줍는 팀입니다.
                              30-40분 내외로 쓰레기를 주우며, 건강한 아침운동 처럼 매일 진행하고 있습니다. 저희에 활동 사진을 인스타그램에 올리고 있으며, 참여 연락 주신분들과도 같이 쓰레기를 줍고 있습니다. 활동사진을 공유함으로써, 사람들에게 쓰레기에 심각성을 알리고, 동시에 건강하고 재밌는 운동으로, 또 색다른 문제 해결방식을 제안하고 있습니다.
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
                                  플라스틱 바스켓 화분, 2021.09
                                </span>
                              </div>
                            </div>
                            <div className="pr-2">
                              {" "}
                              <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <img
                              src={collection1}
                              className=""
                              alt="collection1"
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
                              어선에서 쓸 법한 흰색 트레이가 버려져 있다. 뭐가 담겼을지 모를, 쓰임을 다한 트레이에 흙을 채우고, 식물을 심었다. 
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
                                  크리스마스 트리, 2021.09
                                </span>
                              </div>
                            </div>
                            <div className="pr-2">
                              {" "}
                              <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <img
                              src={collection2}
                              className=""
                              alt="collection2"
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
                              다양한 색깔의 부표들이 버려져
                              있다. 색깔 별로 모아서 크리스마스 트리 처럼
                              형형색색의 부표를 걸어두었다.
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
                                준비중...
                                </span>
                              </div>
                            </div>
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
                                  돌틈에 라이터, 2021.09
                                </span>
                              </div>
                            </div>
                            <div className="pr-2">
                              {" "}
                              <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                            </div>
                          </div>
                          <div>
                            <img
                              src={collection4}
                              className=""
                              alt="collection4"
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
                              다른 나라에서 온 라이터들을 주워다가 여기 제주도 화산섬에 모였다고, 그렇게 만났다고 표현했다.
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
                              autoPlay="autoplay"
                              muted="muted"
                              controls
                              loop
                              preload="auto"
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
                              autoPlay="autoplay"
                              muted="muted"
                              controls
                              loop
                              preload="auto"
                              className="w-full h-full"
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
                            <img
                              src={good}
                              className=""
                              alt="good"
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
            <div className="flex-col md:text-lg text-sm text-right mr-5 mb-32 border-t border-gray-400 md:mx-48 mx-4 mt-8">
              <div className="mt-4">제주클린보이즈클럽 작품 전시회</div>
              <div>2021.10 ~ 2021.11</div>
              <div>애월읍 신엄리 2841-14 올레16코스</div>
              <div>📧 mcyoo247@gmail.com</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Collection4;
