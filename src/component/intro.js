import React from "react";

export default class Intro extends React.Component {
  render() {
    return (
        <div className="intro page">
            <div className="inside">
              <div className="text-box">
                <p className="page-txt">
                  HELLO! I AM <span className="point">HYUNJUN</span>
                </p>
                <h2 className="page-tit en">I'M A <span className="point">FRONT-END</span> DEVELOPER</h2>
                <ul className="profile-list">
                  <li><span className="tit">성별</span><span className="txt">남자</span></li>
                  <li><span className="tit">나이</span><span className="txt">31(1989년생)</span></li>
                  <li><span className="tit">주소</span><span className="txt">서울특별시 동작구 상도로</span></li>
                  <li><span className="tit">경력</span><span className="txt">2013.12~2019.04</span></li>
                  <li><span className="tit">취미</span><span className="txt">어플리케이션개발, 독서, 음악감상, 게임</span></li>
                </ul>
              </div>
                
            </div>
        </div>
    )
  }
}
