import React, { useEffect, useState } from "react";
import "../../style/splitStyle.css";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../../shared/MoveBack";
import RightArrow from "../../images/right-arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAccount } from "../../../redux/actions/accountAction";
import { RootState } from "../../../redux/store";
import {
  CategoryInterface,
  CategoryAccountProps,
  CategoryAccountsInterface,
} from "../../utils/interfaces";
import CategoryAccount from "./CategoryAccount";
import LoadingSpinner from "../../../shared/loadingSpinner";
import Fade from "../../../shared/Fade";

function SelectAccount() {
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [categorys, setCategorys] = useState<CategoryInterface[]>([]);
  const [categoryAccounts, setCategoryAccounts] = useState<
    CategoryAccountsInterface[]
  >([]);
  const dispatch = useDispatch();
  const categoryList = useSelector(
    (state: RootState) => state.category.categoryList
  );
  // 리덕스 리스트 길이 n만큼 categorys 뒤에서 n개 자르기
  const listLen = categoryList.length;
  const navigate = useNavigate();
  const [salaryAccount, setSalaryAccount] = useState<CategoryAccountsInterface>(
    {
      name: "",
      bankName: "",
      accountNumber: "",
    }
  );
  const [isLoading1, setIsLoading1] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  useEffect(() => {
    console.log(listLen);
    fetch("https://buflbe.vercel.app/api/salary/category", {
      method: "GET", // 기본값이지만 명시적으로 써도 됨
      credentials: "include", // 쿠키 및 인증 정보 포함
    })
      .then((response) => response.json())
      .then((data) => {
        setSalaryAccount({
          name: "Salary Account",
          bankName: data.categories[0].bank_name,
          accountNumber: data.categories[0].account_number,
        });
        setCategorys(data.categories);
        console.log("**category", categoryList);
      })
      .catch((error) => console.error("SelectAccount error:", error))
      .finally(() => setIsLoading1(false));
  }, []);

  useEffect(() => {
    fetch("https://buflbe.vercel.app/api/salary/account", {
      method: "GET", // 기본값이지만 명시적으로 써도 됨
      credentials: "include", // 쿠키 및 인증 정보 포함
    })
      .then((response) => response.json())
      .then((data) => {
        setCategoryAccounts(data);
        console.log("✅ accounts:", data);
      })
      .catch((error) => console.error("account get error:", error))
      .finally(() => setIsLoading2(false));
  }, []);

  useEffect(() => {
    setIsFinish(false);
    if (categoryAccounts.every((a) => a.bankName !== "정보 없음")) {
      setIsFinish(true);
    }
  }, [categoryAccounts, categoryList]);

  const clickForYes = () => {
    navigate("/money-split/authentication");
  };

  if (isLoading1 || isLoading2) {
    return <LoadingSpinner />;
  }

  return (
    <Fade>
      <div>
        <MoveBack pageBefore="/money-split/select-ratio" now="account" />
        <div className="center_wrapper">
          <div>
            <div className="black_title">카테고리별 계좌를 선택해주세요.</div>
            <div style={{ height: "550px", overflowY: "scroll" }}>
              {categorys?.map((category, index) => (
                <div>
                  <CategoryAccount
                    categoryId={category.id}
                    category={category.name}
                    ratio={category.ratio}
                    amount={category.amount}
                    account={
                      index === 0
                        ? salaryAccount
                        : categoryAccounts[index] ?? { bankName: "정보 없음" }
                    }
                  />
                </div>
              ))}
            </div>
            <div className="center_wrapper">
              <button
                className={isFinish ? "blue_big_btn" : "gray_big_btn no"}
                type="button"
                onClick={isFinish ? () => clickForYes() : undefined}
              >
                완료했어요.
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default SelectAccount;
