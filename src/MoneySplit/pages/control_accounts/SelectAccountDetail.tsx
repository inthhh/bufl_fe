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
  const selectedAccountId = useSelector((state: RootState) => state.account.selectedAccountId);
  const selectedAccountName = useSelector((state: RootState) => state.account.selectedAccountName);

  const { categoryId } = useParams();
  const categoryList = useSelector((state: RootState) => state.category.categoryList);

  useEffect(() => {
    console.log("*******", categoryId);
    fetch(`http://localhost:5000/api/salary/category/${categoryId}`)
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
      const response = await fetch("http://localhost:5000/api/salary/account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

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
          <div className="black_title">카테고리 명</div>
          <form className="auth-form" style={{ width: "330px" }}>
            <div>
              <label htmlFor="name">카테고리 이름</label>
              <br />
              <div className="black_title" style={{ margin: "5px 0" }}>
                {name}
              </div>
            </div>

            <div>
              <label htmlFor="amount">목표 금액(선택)</label>
              <br />
              <div>{Number(amount).toLocaleString()} 원</div>
            </div>

            <div>
              <label>연결 계좌</label>
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
                  style={{ width: "330px", height: "50px" }}
                >
                  계좌 추가하기
                </button>
              )}
            </div>

            <div>
              <button type="button">카테고리 삭제</button>
            </div>
          </form>
          <div className="center_wrapper">
            <div className="center_wrapper btn">
              <button className="blue_big_btn" type="button" onClick={() => clickForYes()}>
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
