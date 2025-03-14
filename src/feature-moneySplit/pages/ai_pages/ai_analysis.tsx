import React, { useEffect, useState } from "react";
import "../../style/splitStyle.css";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../../shared/MoveBack";
import axios from "axios";
import AI_anaLoading from "./ai_anaLoading";
import { ConsumptionPattern } from "../../utils/interfaces";
import Fade from "../../../shared/Fade";

const AI_analysis: React.FC = () => {
  const navigate = useNavigate();
  const [consumptionPattern, setConsumptionPattern] = useState<
    ConsumptionPattern[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConsumptionPattern = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/ai-analysis",
          { withCredentials: true }
        );
        setConsumptionPattern(response.data.consumptionPattern);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching consumption pattern:", error);
        setLoading(false);
      }
    };

    fetchConsumptionPattern();
  }, []);

  if (loading) {
    return (
      <div>
        <AI_anaLoading />
      </div>
    );
  }

  const clickForYes = () => {
    navigate("/money-split/ai/calculate");
  };
  const clickForNo = () => {
    navigate("/money-split/ai/cancel");
  };
  return (
    <Fade>
      <div>
        <MoveBack pageBefore={"/money-split/ai"} />
        <div className="center_wrapper">
          <div>
            <div className="black_title">AI가 분석한 소비 습관이에요.</div>
            <div className="content_box">
              <div className="black_title">3개월 동안,</div>
              <div>
                {/* api - 소비습관 불러오기 */}
                <ul className="analysis_list">
                  {consumptionPattern?.map((pattern) => (
                    <li>
                      💰 {pattern.name} {parseInt(pattern.ratio)}%
                    </li>
                  ))}
                </ul>
              </div>
              <div className="black_title">사용했어요.</div>
              <div>이 정보를 바탕으로 적정 분배비율 계산을 시작할게요.</div>
            </div>

            <div className="center_wrapper">
              <div className="center_wrapper btn">
                <button
                  className="gray_small_btn"
                  type="button"
                  onClick={() => clickForNo()}
                >
                  다시 할래요
                </button>
                <button
                  className="blue_small_btn"
                  type="button"
                  onClick={() => clickForYes()}
                >
                  계산 시작
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AI_analysis;
