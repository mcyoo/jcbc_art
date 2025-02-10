import React from "react";
import "../assets/App.css";
import ego_letgo_ from "../assets/img/ego.letgo_.PNG";

class Collection8 extends React.Component {
  render() {
    return (
      <div className="-mt-24">
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
                    src={ego_letgo_}
                  />
                  <div id="header-text" class="leading-5 ml-6 sm">
                    <h4 id="name" class="text-lg font-semibold">
                      고나경
                    </h4>
                    <h5 id="job" class="font-semibold text-sm">
                      나메크성인
                    </h5>
                  </div>
                </div>
                <div class="font-semibold text-sm text-gray-900">
                  <div>성별 : 여성</div>
                  <div>전화번호 : +82 10-7245-418x</div>
                  <div>쓰레기 좌표 : 33.473549, 126.352153</div>
                  <div>
                    쓰레기를 발견할 시, 위에 번호로 연락 주시기 바랍니다.
                    감사합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Collection8;
