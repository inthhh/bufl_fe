import React, { useEffect } from "react";
import "../splitStyle.css";
import { useNavigate } from "react-router-dom";
import MoveBack from "../MoveBack";
import RightArrow from "../img/right-arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAccount } from "../../redux/actions/accountAction";
import { RootState } from "../../redux/store";

interface CategoryAccountProps {
  category: string;
  account?: string;
  ratio: number;
  amount: number;
}

const CategoryAccount: React.FC<CategoryAccountProps> = (props) => {
  const navigate = useNavigate();
  const clickForAccountLink = () => {
    navigate("/money-split/select-account/detail");
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSelectedAccount(-1));
  }, []);
  return (
    <div>
      <div className="account_list" onClick={clickForAccountLink}>
        <div className="list_div">
          <div>
            <div>
              <strong>{props.category}</strong>
            </div>
            <div>{props.account ? props.account : "계좌 연결하기"}</div>
          </div>
          <img src={RightArrow} alt="right" width={15} />
        </div>
        <div className="list_div" style={{ marginTop: "15px" }}>
          <div className="font_20" style={{ color: "#3182F6" }}>
            {props.ratio}%
          </div>
          <div className="font_20" style={{ color: "#858585" }}>
            {props.amount}원
          </div>
        </div>
      </div>
    </div>
  );
};

function SelectAccount() {
  const [isFinish, setIsFinish] = React.useState(true);
  const navigate = useNavigate();
  const clickForYes = () => {
    navigate("/money-split/authentication");
  };
  return (
    <div>
      <MoveBack pageBefore="/money-split/select-ratio" now="account" />
      <div className="center_wrap">
        <div>
          <div className="black_title">카테고리별 계좌를 선택해주세요.</div>
          <div>
            <CategoryAccount category="💰 월급 통장" ratio={20} amount={600000} />
            <CategoryAccount category="💰 월급 통장" ratio={20} amount={600000} />
          </div>
          <button
            className={isFinish ? "blue_big_btn" : "gray_big_btn"}
            type="button"
            onClick={isFinish ? () => clickForYes() : undefined}
          >
            완료했어요.
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectAccount;
