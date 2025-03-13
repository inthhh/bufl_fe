import React, { useState } from "react";
import "../../style/splitStyle.css";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../../shared/MoveBack";
import RightArrow from "../../images/right-arrow.png";
import tossIcon from "../../../shared/shared-images/토스뱅크.png";
import Fade from "../../../shared/Fade";

const Authentication: React.FC = () => {
  const [isFinish, setIsFinish] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clickForToss = () => {
    navigate("/money-split/toss-auth");
  };
  return (
    <Fade>
      <div>
        <MoveBack pageBefore="/money-split/select-account" />
        <div className="center_wrapper">
          <div>
            <div className="black_title">
              자동이체 등록에는 <br />
              인증서 확인이 필요해요.
            </div>
            <div style={{ marginTop: "40px" }}>
              <button className="big_btn" type="button" onClick={() => clickForToss()}>
                <div className="list_div" style={{ padding: "0 10px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    토스 인증서 <img src={tossIcon} alt="" width={22} style={{ marginLeft: "5px" }} />
                  </div>
                  <img src={RightArrow} alt="" width={15} />
                </div>
              </button>
              <button
                className="big_btn"
                type="button"
                style={{ marginTop: "10px" }}
                onClick={() => setIsModalOpen(true)}
              >
                <div className="list_div" style={{ padding: "0 10px" }}>
                  금융 인증서
                  <img src={RightArrow} alt="" width={15} />
                </div>
              </button>

              {isModalOpen && (
                <div className="modal-overlay1" onClick={() => setIsModalOpen(false)}>
                  <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
                    <div className="center_wrap">
                      <p>지금은 금융 인증서를 지원하지 않아요.😢</p>
                      <p>토스 인증서로 전자서명을 진행해주세요.</p>
                      <br />
                      <button className="blue_btn" onClick={() => setIsModalOpen(false)} type="button">
                        닫기
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Authentication;
