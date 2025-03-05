import React from "react";
import "../splitStyle.css";
import { useNavigate } from "react-router-dom";
import MoveBack from "../MoveBack";
import RightArrow from "../img/right-arrow.png";

const Authentication: React.FC = () => {
  const [isFinish, setIsFinish] = React.useState(false);
  const navigate = useNavigate();
  const clickForToss = () => {
    navigate("/money-split/toss-auth");
  };
  return (
    <div>
      <MoveBack pageBefore="/money-split/select-account" />
      <div className="center_wrap">
        <div>
          <div className="black_title">
            자동이체 등록에는 <br />
            인증서 확인이 필요해요.
          </div>
          <div style={{ marginTop: "50px" }}>
            <button className="big_btn" type="button" onClick={() => clickForToss()}>
              <div className="list_div" style={{ padding: "0 10px" }}>
                토스 인증서
                <img src={RightArrow} alt="" width={15} />
              </div>
            </button>
            <button className="big_btn" type="button" style={{ marginTop: "10px" }}>
              <div className="list_div" style={{ padding: "0 10px" }}>
                금융 인증서
                <img src={RightArrow} alt="" width={15} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
