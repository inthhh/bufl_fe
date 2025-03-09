import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import IntImage1 from "../images/int1.png";
import IntImage2 from "../images/int2.png";
import IntImage3 from "../images/int3.png";
import IntImage4 from "../images/int4.png";
import IntImage5 from "../images/int5.png";
import IntImage6 from "../images/int6.png";
import "../../MoneySplit/style/splitStyle.css";
import MoveBack from "../../MoneySplit/MoveBack";

const interests = [
  { id: 1, img: IntImage1 },
  { id: 2, img: IntImage2 },
  { id: 3, img: IntImage3 },
  { id: 4, img: IntImage4 },
  { id: 5, img: IntImage5 },
  { id: 6, img: IntImage6 },
];

const InterestPage = () => {
  const navigate = useNavigate();
  const [selectedInterest, setSelectedInterest] = useState<number | null>(null);

  // 하나만 선택 가능
  const handleSelectInterest = (id: number) => {
    setSelectedInterest((prev) => (prev === id ? null : id)); // 선택 취소 가능
  };

  return (
    <div>
      <MoveBack pageBefore="/sign/salary-info" />
      <div className="center_wrap">
        <div className="interest__title-wrap">
          <h3>다음 중, 관심사가 있다면 선택해주세요.</h3>
        </div>

        <div>
          {interests.map((interest) => (
            <img
              key={interest.id}
              src={interest.img}
              alt={`interest-${interest.id}`}
              width="160px"
              style={{
                cursor: "pointer",
                borderRadius: "30px",
                backgroundColor: selectedInterest === interest.id ? "#3182f6" : "transparent",
                border: selectedInterest === interest.id ? "4px solid #3182f6" : "2px solid transparent",

                margin: "5px 7px",
              }}
              onClick={() => handleSelectInterest(interest.id)}
            />
          ))}
        </div>

        <div className="center_wrap">
          <button
            className={`btn_start ${selectedInterest === null ? "disabled" : ""}`}
            onClick={() => navigate("/sign/completion")}
            disabled={selectedInterest === null}
          >
            저장하기
          </button>
        </div>
        <br />
        <span
          onClick={() => navigate("/sign/completion")}
          style={{
            color: "gray",
            borderBottom: "solid 2px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          건너뛰기
        </span>
      </div>
    </div>
  );
};

export default InterestPage;
