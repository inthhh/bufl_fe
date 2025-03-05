import React from "react";
import "../splitStyle.css";
import { useNavigate } from "react-router-dom";
import MoveBack from "../MoveBack";

const AI_analysis: React.FC = () => {
  const navigate = useNavigate();
  const clickForYes = () => {
    navigate("/money-split/ai/calculate-loading");
  };
  const clickForNo = () => {
    navigate("/money-split/ai/cancel");
  };
  return (
    <div>
      <MoveBack pageBefore={"/money-split/ai"} />
      <div className="center_wrap">
        <div>
          <div className="black_title">AI가 분석한 소비 습관이에요.</div>
          <div className="content_box">
            <div className="black_title">3개월 동안,</div>
            <div>
              {/* api - 소비습관 불러오기 */}
              <ul className="analysis_list">
                <li>생활비 35%</li>
                <li>적금 20%</li>
                <li>쇼핑, 장보기 30%</li>
                <li>재테크 5%</li>
                <li>기타 10% (보험금 등)</li>
              </ul>
            </div>
          </div>

          <div className="center_wrap">
            <div className="center_wrap btn">
              <button className="gray_small_btn" type="button" onClick={() => clickForNo()}>
                다시 할래요
              </button>
              <button className="blue_small_btn" type="button" onClick={() => clickForYes()}>
                계산 시작
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI_analysis;
