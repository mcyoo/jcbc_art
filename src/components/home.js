import React from "react";
import Slider from "react-slick";
import "../assets/App.css";
import jcbc_logo from "../assets/img/logo.jpg";
import collection1 from "../assets/img/collection1.jpeg";
import collection2 from "../assets/img/collection2.jpeg";
import collection3 from "../assets/img/collection3.jpg";
import good from "../assets/img/good.jpg";
import poster from "../assets/img/poster.png";
import throwball from "../assets/video/throw.MOV";
import miniplay from "../assets/video/miniplay.MOV";
import { LazyLoadImage } from "react-lazy-load-image-component";

class Home extends React.Component {
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
      initialSlide: 0,
      className: "center",
      centerMode: true,
      centerPadding: "20px",
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
                                ??????????????????????????? ?????????
                              </span>
                            </div>
                          </div>
                          <div>
                            <LazyLoadImage
                              alt="poster"
                              src={poster}
                              visibleByDefault={true}
                            />
                          </div>
                          <div className="mx-4 mb-4 mt-6">
                            <span className="text-sm md:text-lg md:leading-8">
                              ?????????????????????????????? 2020??? 10??? ?????? ????????? ??????
                              ?????????, ?????? ?????? 8?????? ??? ?????? ????????? ????????????
                              ?????? ????????????. 30-40??? ?????? ??? ???????????? ?????????,
                              ?????? ?????? ?????? ?????? ???????????? ????????????. ?????? ??????
                              ????????? ?????????????????? ????????? ?????????, ?????? ??????
                              ???????????? ?????? ?????? ???????????? ?????? ????????????.
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
                                ????????? : ???????????? ????????? ??????, 2021.09
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
                              visibleByDefault={true}
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
                              ???????????? ????????? ????????? ??? ???????????? ??? ?????? ??????
                              ???????????? ????????? ??????. ?????? ???????????? ??????, ?????????
                              ?????? ???????????? ?????? ?????????, ????????? ?????????.
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
                                ????????? : ????????? ?????????, 2021.09
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
                              visibleByDefault={true}
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
                              ???????????? ????????? ??????. ??? ????????? ????????? ??????
                              ?????????. ???????????? ?????? ??????. ??? ?????????????????? ?????????
                              ???????????? ??????. ??? ????????? ????????? ?????? ????????????.
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
                                ????????? : ??????????????? ??????, 2021.09
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
                              visibleByDefault={true}
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
                              ??????????????? ????????? ????????? ???????????? ????????? ??????.
                              ?????? ?????? ????????? ??????????????? ?????? ?????? ???????????????
                              ????????? ???????????????.
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
                            <span className="text-sm">????????? ?????? ?????????</span>
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
                                  ????????? ??????
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
                              autoplay="autoplay"
                              muted="muted"
                              controls
                              loop
                              preload="auto"
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
                            <span className="text-sm">
                              ????????? ???????????? ????????????
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
                            <LazyLoadImage
                              alt="good"
                              src={good}
                              visibleByDefault={true}
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
                              ????????? ?????? ????????????. ????????? ??????????????? ??????!
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
              <div className="mt-4">??????????????????????????? ?????? ?????????</div>
              <div>2021.10</div>
              <div>????????? ????????? 2841-14 ??????16??????</div>
              <div>???? mcyoo247@gmail.com</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Home;
