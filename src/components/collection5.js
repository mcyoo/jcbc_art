import React from "react";
import "../assets/App.css";
import chulma___ from "../assets/img/chulma___.PNG";

class Collection5 extends React.Component {
  render() {
    return (
      <div className="">
        <div className="">
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
                    src={chulma___}
                  />
                  <div id="header-text" class="leading-5 ml-6 sm">
                    <h4 id="name" class="text-lg font-semibold">
                      정연철
                    </h4>
                    <h5 id="job" class="font-semibold text-sm">
                      행인
                    </h5>
                  </div>
                </div>
                <div class="font-semibold text-sm text-gray-900">
                  <div>성별 : 남성</div>
                  <div>전화번호 : +82 10-9151-723x</div>
                  <div>쓰레기 좌표 : 33.475155, 126.352499</div>
                  <div>
                    쓰레기를 발견할 시, 위에 번호로 연락 주시기 바랍니다.
                    감사합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col md:text-lg text-sm text-right mr-5 mb-36 border-t border-gray-400 md:mx-48 mx-4 mt-8">
            <div className="mt-4">제주클린보이즈클럽 작품 전시회</div>
            <div>2021.10</div>
            <div>애월읍 신엄리 2841-14 올레16코스</div>
            <div>📧 mcyoo247@gmail.com</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Collection5;
