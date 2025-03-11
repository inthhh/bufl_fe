import React, { useEffect, useState } from "react";
import "../../style/splitStyle.css";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../MoveBack";
import DonutChart from "./ai_doughnut";
import axios from "axios";
import AI_calLoading from "./ai_calLoading";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setCategories } from "../../../redux/actions/categoryAction";

interface RecommendRatio {
  name: string;
  ratio: string;
  amount: number;
}

const AI_calculate: React.FC = () => {
  const [recommendRatio, setRecommendRatio] = useState<RecommendRatio[]>([]);
  const [total, setTotal] = useState<number>(12345);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const categoryList = useSelector((state: RootState) => state.category.categoryList);

  const colorList = ["#FF6B86", "#bdeeb6", "#FFF58A", "#FFB1E0", "#5eb961", "#6BF8F6", "#C767D0"];

  const saveTheResult = async () => {
    try {
      await axios.post("http://localhost:5000/api/ai-analysis/recommend", {}, { withCredentials: true });
      navigate("/money-split/select-account");
    } catch (error) {
      console.error("Error saving the result:", error);
    }
  };

  const clickForYes = () => {
    saveTheResult();
  };

  const clickForNo = () => {
    const updatedCategories = recommendRatio.map((item, index) => ({
      name: item.name,
      goal: 0,
      color: colorList[index % colorList.length], // 색상 배열에서 순환하여 적용
      ratio: Number(item.ratio),
    }));
    dispatch(setCategories(updatedCategories));
    navigate("/money-split/select-ratio");
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/users/salary", {
      method: "GET", // 기본값이지만 명시적으로 써도 됨
      credentials: "include", // 쿠키 및 인증 정보 포함
    })
      .then((response) => response.json())
      .then((data) => {
        setTotal(Number(data.amount));
        console.log(total);
      })
      .catch((error) => console.error("SelectRatio error:", error));
  }, []);

  useEffect(() => {
    const fetchRecommendRatio = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/ai-analysis/recommend", { withCredentials: true });
        setRecommendRatio(response.data.recommendRatio);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recommend ratio:", error);
        setLoading(false);
      }
    };

    fetchRecommendRatio();
  }, []);

  if (loading) {
    return (
      <div>
        <AI_calLoading />
      </div>
    );
  }

  return (
    <div>
      <MoveBack pageBefore={"/money-split/ai/analysis"} />
      <div className="center_wrapper">
        <div>
          <div className="black_title">
            AI가 추천하는
            <br />
            월급 분배 비율이에요!
          </div>
          <div style={{ overflowY: "auto" }}>
            <div className="content_box">
              <div className="black_title">월급 {total.toLocaleString()}원에서</div>
              <div>
                <ul className="analysis_list">
                  {recommendRatio.map((recommend) => (
                    <li>
                      {recommend.name} {Number(recommend.ratio)}%{" "}
                      <span>(약 {Number(recommend.amount).toLocaleString()}원)</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="center_wrapper">
              <div style={{ width: "180px", height: "180px", marginTop: "20px" }}>
                <DonutChart
                  dataList={recommendRatio.map((r) => Number(r.ratio))}
                  name={recommendRatio.map((r) => r.name)}
                />
              </div>
            </div>
          </div>

          <div className="center_wrapper">
            <div className="center_wrapper btn">
              <button className="gray_small_btn" type="button" onClick={() => clickForNo()}>
                수정할래요
              </button>
              <button className="blue_small_btn" type="button" onClick={() => clickForYes()}>
                좋아요!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI_calculate;
