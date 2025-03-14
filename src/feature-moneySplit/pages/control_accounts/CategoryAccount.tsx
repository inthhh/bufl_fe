import React, { useEffect, useState } from "react";
import "../../style/splitStyle.css";
import { useNavigate } from "react-router-dom";
import RightArrow from "../../images/right-arrow.png";
import { useDispatch } from "react-redux";
import { setSelectedAccount } from "../../../redux/actions/accountAction";
import { CategoryAccountProps } from "../../utils/interfaces";
import Fade from "../../../shared/Fade";

// 카테고리와 계좌 연동 결과를 보여주는 컴포넌트

const CategoryAccount: React.FC<CategoryAccountProps> = (props) => {
  const navigate = useNavigate();
  const clickForAccountLink = () => {
    navigate(`/money-split/select-account/detail/${props.categoryId}`);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSelectedAccount({ selectedAccountId: -1, selectedAccountName: "" }));
  }, []);
  return (
    <Fade>
      <div>
        <div
          className="account_list"
          onClick={props.category == "월급 통장" ? undefined : clickForAccountLink}
          style={props.category == "월급 통장" ? undefined : { backgroundColor: "#DCEAFF" }}
        >
          <div className="list_div">
            <div>
              <div>
                <strong>{props.category}</strong>
              </div>

              <div>
                {props.account.bankName === "정보 없음"
                  ? "계좌 연결하기"
                  : props.account.bankName + " " + props.account.accountNumber + " ✅"}
              </div>
            </div>
            {props.category == "💰 월급 통장" ? undefined : <img src={RightArrow} alt="right" width={15} />}
          </div>
          <div className="list_div" style={{ marginTop: "15px" }}>
            <div className="font_20" style={{ color: "#3182F6" }}>
              {Number(props.ratio)}%
            </div>
            <div className="font_20" style={{ color: "#858585" }}>
              {Number(props.amount).toLocaleString()}원
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default CategoryAccount;
