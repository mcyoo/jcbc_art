import React from "react";
import Slider from "react-slick";
import "../assets/App.css";
import collection1 from "../assets/img/collection1.jpeg";
import collection2 from "../assets/img/collection2.jpeg";
import collection3 from "../assets/img/collection3.jpg";
import poster from "../assets/img/poster.png";

class Home extends React.Component {
  state = {
    isLoading: true,
    images: []
  };

  preload() {
    const preload_list = [
      poster,
      collection1,
      collection2,
      collection3
    ]

    let images = []
    for (let i = 0; i < preload_list.length; i++) {
      images[i] = new Image();
      images[i].src = preload_list[i];
    }

    this.setState({
      images: images
    });
  }

  componentDidMount() {
    this.preload()
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }

  render() {
    const { isLoading, images } = this.state;

    const settings = {
      adaptiveHeight: false,
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
      centerPadding: "15%"
    };

    return (
      <div className="">
        <div
          class="container inset-0 max-w-full flex items-center justify-around h-16 lg:h-24 bg-white border-b border-gray-400 fixed z-10"
        >
          <div class="flex w-36 lg:w-56 items-center justify-between">
            <img
              class="w-20 h-8 md:w-32 md:h-12"
              src="/instagram_exhibition.png"
            />
            <a
              href="https://www.instagram.com/jejucleanboysclub/?hl=ko"
              target="_blank"
              class="bg-gradient-to-r from-yellow-400 via-pink-400 to-red-600 p-0.5 rounded-full"
            >
              <img
                class="w-10 lg:w-16 rounded-full border-white border-2"
                src="/logo.jpg"
              />
            </a>
          </div>
          <a class="text-sm lg:text-xl">@jejucleanboysclub</a>
        </div>
        {isLoading ? (
          <div className="">
            <div className="w-full flex justify-center items-center">
              <div className="w-10/12 md:w-2/3 bg-white shadow-lg overflow-hidden">
                <div className="w-1/3 h-4 bg-gray-200 animate-pulse ml-4 mb-4 mt-4"></div>
                <div className="w-full h-80 md:h-100 bg-gray-200 animate-pulse"></div>
                <div className="mt-8 h-32 w-full space-y-3">
                  <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="w-1/2 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="">
              <Slider {...settings}>
                <div className="">
                  <div className="flex justify-center items-center">
                    <div className="w-10/12 md:w-2/3 bg-white shadow-lg overflow-hidden">
                      <div className="w-full">
                        <div className="flex justify-between items-center p-3">
                          <div className="flex flex-row items-center">
                            <span className="font-bold mr-1 text-sm md:text-lg">
                              제주클린보이즈클럽 전시회
                            </span>
                          </div>
                        </div>
                        <div>
                          <img className="w-full" src={images[0].src} alt="poster" />
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

                <div className="">
                  <div className="flex justify-center items-center">
                    <div className="w-10/12 md:w-2/3 bg-white shadow-lg overflow-hidden">
                      <div className="w-full">
                        <div className="flex justify-between items-center p-3">
                          <div className="flex flex-row items-center">
                            <span className="font-bold mr-1 text-sm md:text-lg">
                              플라스틱 바스켓 화분, 2021.09
                            </span>
                          </div>
                          <div className="pr-2">
                            <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                          </div>
                        </div>
                        <div>
                          <img className="w-full" src={images[1].src} />
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
                            해안가에 버려진 쓰레기 중 어선에서 쓸 법한 흰색
                            트레이가 버려져 있다. 뭐가 담겼을지 모를, 쓰임을
                            다한 트레이에 흙을 채우고, 식물을 심었다.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="flex justify-center items-center">
                    <div className="w-10/12 md:w-2/3 bg-white shadow-lg overflow-hidden">
                      <div className="w-full">
                        <div className="flex justify-between items-center p-3">
                          <div className="flex flex-row items-center">
                            <span className="font-bold mr-1 text-sm md:text-lg">
                              돌틈에 라이터, 2021.09
                            </span>
                          </div>
                          <div className="pr-2">
                            <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                          </div>
                        </div>
                        <div>
                          <img className="w-full" src={images[2].src} />
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
                            내린다. 자세히는 보지 말자. 다 해양쓰레기로 버려진
                            라이터들 이다. 이 작품은 멀리서 봐야 아름답다.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="flex justify-center items-center">
                    <div className="w-10/12 md:w-2/3 bg-white shadow-lg overflow-hidden">
                      <div className="w-full">
                        <div className="flex justify-between items-center p-3">
                          <div className="flex flex-row items-center">
                            <span className="font-bold mr-1 text-sm md:text-lg">
                              크리스마스 트리, 2021.09
                            </span>
                          </div>
                          <div className="pr-2">
                            <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                          </div>
                        </div>
                        <div>
                          <img className="w-full" src={images[3].src} />
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
                            해안가에는 다양한 색깔의 부표들이 버려져 있다.
                            색깔 별로 모아서 크리스마스 트리 처럼 형형색색의
                            부표를 걸어두었다.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div>
              <div className="flex-col md:text-lg text-sm text-right mr-5 mb-36 border-t border-gray-400 md:mx-48 mx-4 mt-8">
                <div className="mt-4">제주클린보이즈클럽 작품 전시회</div>
                <div>2021.10</div>
                <div>애월읍 신엄리 2841-14 올레16코스</div>
                <div>📧 mcyoo247@gmail.com</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Home;
