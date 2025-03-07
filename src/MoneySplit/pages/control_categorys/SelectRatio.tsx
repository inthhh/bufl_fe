import React, { useEffect, useState } from "react";
import "../../style/splitStyle.css";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../MoveBack";
import { useSelector, useDispatch } from "react-redux";
import { setCategories } from "../../../redux/actions/categoryAction";
import { RootState } from "../../../redux/store";
import { CategoryProps } from "../interfaces";

const Category: React.FC<CategoryProps> = (props) => {
  const { idx, total, category, ratio, isOrigin, updateRatio, clickForDelete } = props;
  const [value, setValue] = useState(ratio); // 슬라이더 값 상태 관리

  const dispatch = useDispatch();
  const categoryList = useSelector((state: RootState) => state.category.categoryList);

  useEffect(() => {
    setValue(ratio);
  }, [ratio]);

  const handleInput = (event: any) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    updateRatio(idx, newValue);
    let newCategoryList = categoryList.map((category, i) => (i === idx ? { ...category, ratio: newValue } : category));
    dispatch(setCategories(newCategoryList));
    // 진행된 비율 계산
    let gradientValue = newValue;
    console.log(newCategoryList);
    event.target.style.background = `linear-gradient(to right, rgb(28, 106, 216) 0%, rgb(28, 106, 216) ${gradientValue}%, rgb(200, 200, 200) ${gradientValue}%, rgb(200, 200, 200) 100%)`;
  };

  return (
    <div
      className="account_list"
      style={isOrigin ? { backgroundColor: "#dceaff" } : { height: "150px", paddingBottom: "10px" }}
    >
      <div className="list_div" style={{ marginTop: "10px" }}>
        <div className="list_title">{category}</div>
        <div className="list_title">{((total * value) / 100).toLocaleString()}원</div>
      </div>
      <div className="list_div" style={{ marginTop: "20px" }}>
        <input
          type="range"
          min="0"
          max="100"
          step="5"
          value={value}
          onChange={handleInput}
          className={isOrigin ? "input_origin" : "input_not_origin"}
        />
        <div>{value}%</div>
      </div>
      {!isOrigin && (
        <div
          style={{ fontSize: "14px", textAlign: "right", marginTop: "20px", color: "#999", cursor: "pointer" }}
          onClick={() => clickForDelete(idx)}
        >
          삭제
        </div>
      )}
    </div>
  );
};

const SelectRatio: React.FC = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state: RootState) => state.category.categoryList);
  const navigate = useNavigate();
  const [is100percent, setIs100percent] = useState<boolean>(false);
  const [isTooBig, setIsTooBig] = useState<boolean>(false);
  const [isTooSmall, setIsTooSmall] = useState<boolean>(true);

  const [total, setTotal] = useState<number>(12345);
  useEffect(() => {
    fetch("http://localhost:5000/api/users/salary")
      .then((response) => response.json())
      .then((data) => {
        setTotal(Number(data.amount));
        console.log(total);
      })
      .catch((error) => console.error("SelectRatio error:", error));
  }, []);

  const [ratios, setRatios] = useState<number[]>([]);

  useEffect(() => {
    // 카테고리 별 비율 렌더링
    let ratioList: number[] = [];
    categoryList.map((c) => {
      ratioList.push(c.ratio);
    });
    setRatios(ratioList);
  }, []);

  // 하위 카테고리들의 ratio 합을 계산
  const subCategoryTotal: number = Object.values(ratios)
    .filter((_, index) => index >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  const salaryAccountRatio = 100 - subCategoryTotal; // 월급 통장 비율 자동 조정

  useEffect(() => {
    if (categoryList.length > 0) {
      const updatedCategoryList = categoryList.map((category, index) =>
        index === 0 ? { ...category, ratio: salaryAccountRatio } : category
      );
      dispatch(setCategories(updatedCategoryList));
    }
  }, [salaryAccountRatio]);

  const updateRatio = (idx: number, newRatio: number) => {
    setRatios((prev: number[]) => {
      const updatedRatios: number[] = { ...prev, [idx]: newRatio };
      const subCategoryTotal = Object.values(updatedRatios)
        .filter((_, index) => index >= 1)
        .reduce((acc, cur) => acc + cur, 0);
      const salaryAccountRatio = 100 - subCategoryTotal;

      // 비율이 100%를 초과하면 기존 값 유지
      if (subCategoryTotal === 100) {
        console.log("100% 완성");
        setIs100percent(true);
        setIsTooBig(false);
        setIsTooSmall(false);
      }
      if (subCategoryTotal < 100) {
        console.log("100% 미만");
        setIs100percent(false);
        setIsTooBig(false);
        setIsTooSmall(false);
        if (subCategoryTotal < 50) {
          setIsTooSmall(true);
        }
      }
      if (subCategoryTotal > 100) {
        setIs100percent(false);
        setIsTooBig(true);
        setIsTooSmall(false);
        console.log("100% 초과");
        // return prev; // 변경되지 않도록 이전 값 반환
      }
      return updatedRatios;
    });

    let newCategoryList = categoryList.map((category, i) => (i === idx ? { ...category, ratio: newRatio } : category));

    dispatch(setCategories(newCategoryList));
  };

  const clickForDelete = (idx: number) => {
    let newCategoryList = [...categoryList];
    newCategoryList.splice(idx, 1);
    dispatch(setCategories(newCategoryList));
  };

  const clickForYes = async () => {
    console.log(categoryList);
    const requestBody = categoryList.map(({ name, goal, color, ratio }) => ({
      name,
      goal,
      color,
      ratio,
    }));
    console.log(requestBody);
    try {
      const response = await fetch("http://localhost:5000/api/salary/category", {
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
      navigate("/money-split/select-account");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const clickForNo = () => {
    navigate("/money-split/add-category");
  };

  return (
    <div>
      <MoveBack pageBefore="/money-split" now="ratio" />
      <div className="center_wrapper">
        <div>
          <div>
            <div className="black_title">월급 쪼개기 비율을 설정해주세요.</div>

            <div style={{ margin: "10px 0" }}>
              <div>월 소득</div>
              <div style={{ fontSize: "22px" }}>{total.toLocaleString()}원 중,</div>
            </div>
          </div>
          <div style={{ height: "500px", overflowY: "scroll" }}>
            <div>
              {/* 월급 통장 (자동 계산) */}
              <Category
                idx={0}
                category="💰 월급 통장"
                total={total}
                ratio={salaryAccountRatio}
                amount={total * salaryAccountRatio * 0.01}
                isOrigin={true}
                updateRatio={() => {}}
                clickForDelete={clickForDelete}
              />
              <div style={{ marginBottom: "5px" }}>
                {is100percent && !isTooBig ? (
                  <div>분배 완료!</div>
                ) : isTooBig ? (
                  <div style={{ color: "red" }}>비율의 총 합이 100%를 초과해요! ({-1 * salaryAccountRatio}% 초과)</div>
                ) : (
                  <div style={{ color: "blue" }}>비율의 총 합이 100%가 되도록 해주세요.</div>
                )}
              </div>
              {/* 하위 카테고리 */}
              {categoryList &&
                categoryList.map((cate, index) =>
                  index >= 1 ? (
                    <Category
                      key={index}
                      idx={index}
                      total={total}
                      category={cate.name}
                      ratio={ratios[index] || 0}
                      amount={0}
                      updateRatio={updateRatio}
                      clickForDelete={clickForDelete}
                    />
                  ) : null
                )}
            </div>
          </div>
          <div className="center_wrapper">
            <div className="center_wrapper btn">
              <button
                className="gray_small_btn"
                style={{ backgroundColor: "#DCEAFF" }}
                type="button"
                onClick={clickForNo}
              >
                카테고리 추가
              </button>
              <button
                className={isTooBig || isTooSmall ? "gray_small_btn no" : "blue_small_btn"}
                type="button"
                onClick={clickForYes}
              >
                완료했어요
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectRatio;
