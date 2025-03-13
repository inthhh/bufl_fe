import React, { useEffect, useState } from "react";
import "../../style/splitStyle.css"; // CSS 파일 import
import { useNavigate, useParams } from "react-router-dom";
import MoveBack from "../../MoveBack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import RightArrow from "../../images/right-arrow.png";

const SelectAccountDetail: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [color, setColor] = useState<string>("#d0defa");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedAccountId = useSelector(
    (state: RootState) => state.account.selectedAccountId
  );
  const selectedAccountName = useSelector(
    (state: RootState) => state.account.selectedAccountName
  );

  const { categoryId } = useParams();
  const categoryList = useSelector(
    (state: RootState) => state.category.categoryList
  );

  useEffect(() => {
    console.log("*******", categoryId);
    fetch(`https://buflbe.vercel.app/api/salary/category/${categoryId}`, {
      method: "GET", // 기본값이지만 명시적으로 써도 됨
      credentials: "include", // 쿠키 및 인증 정보 포함
    })
      .then((response) => response.json())
      .then((data) => {
        setName(data.category[0].name);
        setAmount(data.category[0].goal_amount);
        console.log(data.category[0].name, data.category[0].goal_amount);
        console.log("***", data.category);
      })
      .catch((error) => console.error("SelectAccountDetail error:", error));
  }, []);

  // console.log(selectedAccount);
  const clickForYes = async () => {
    const requestBody = {
      categoryId: Number(categoryId),
      accountId: Number(selectedAccountId),
    };
    // api로 계좌 정보 보내기
    try {
      const response = await fetch(
        "https://buflbe.vercel.app/api/salary/account",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
          credentials: "include", // 쿠키 및 인증 정보 포함
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send data");
      }
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("SelectAccountDetail Error:", error);
    }
    navigate("/money-split/select-account");
  };
  const clickForAccount = () => {
    navigate(`/money-split/select-account/accounts/${categoryId}`);
  };

  return (
    <div>
      <MoveBack pageBefore="/money-split/select-account" />
      <div className="center_wrapper">
        <div>
          <form className="auth-form" style={{ width: "330px" }}>
            <div>
              <label className="title" htmlFor="name">
                카테고리 명
              </label>
              <br />
              <div className="input-form">{name}</div>
            </div>

            <div>
              <label className="title" htmlFor="amount">
                목표 금액
              </label>
              <br />
              <div className="input-form">
                {Number(amount).toLocaleString()} 원
              </div>
            </div>

            <div>
              <label className="title">연결 계좌</label>
              {selectedAccountId >= 0 && selectedAccountName.length > 0 ? (
                <div style={{ margin: "10px 0" }}>
                  <div onClick={clickForAccount} className="list_div font_20">
                    {selectedAccountName}
                    <img src={RightArrow} alt="" width={15} />
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={clickForAccount}
                  className="light_blue_btn"
                  style={{
                    width: "330px",
                    height: "45px",
                    fontSize: "15px",
                    fontWeight: "normal",
                  }}
                >
                  + 계좌 추가하기
                </button>
              )}
            </div>
          </form>
          <div className="center_wrapper">
            <div className="center_wrapper btn">
              <button
                className="blue_big_btn"
                type="button"
                onClick={() => clickForYes()}
              >
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAccountDetail;
