import React, { useEffect, useRef, useState } from "react";
import "../splitStyle.css";
import { useLocation, useNavigate } from "react-router-dom";
import MoveBack from "../MoveBack";
import { useSelector, useDispatch } from "react-redux";
import { setCategories } from "../../redux/actions/categoryAction";
import { RootState } from "../../redux/store";

interface CategoryProps {
  idx: number;
  total: number;
  category: string;
  ratio: number;
  amount: number;
  isOrigin?: boolean;
}

const Category: React.FC<CategoryProps> = (props) => {
  const [value, setValue] = useState(props.ratio); // 슬라이더 값 상태 관리
  const maxValue = 100; // 슬라이더 최대값
  const [amount, setAmount] = useState(props.amount);
  const total = props.total;
  const dispatch = useDispatch();
  const categoryList = useSelector((state: RootState) => state.category.categoryList);

  useEffect(() => {
    setAmount(total * value * 0.01);
  }, [value]);

  const handleInput = (event: any) => {
    const newValue = event.target.value;
    setValue(newValue);
    // 진행된 비율 계산
    const gradientValue = (100 / maxValue) * newValue;
    // 배경 스타일 업데이트
    event.target.style.background = `linear-gradient(to right, rgb(28, 106, 216) 0%, rgb(28, 106, 216) ${gradientValue}%, rgb(200, 200, 200) ${gradientValue}%, rgb(200, 200, 200) 100%)`;
  };

  const clickForDelete = (index: number) => {
    console.log(index);
    let newCategoryList = [...categoryList];
    newCategoryList.splice(index, 1);
    dispatch(setCategories(newCategoryList));
    console.log(categoryList);
  };

  return (
    <div
      className="account_list"
      style={props.isOrigin ? { backgroundColor: "#dceaff" } : { height: "150px", paddingBottom: "10px" }}
    >
      <div className="list_div" style={{ marginTop: "10px" }}>
        <div className="list_title">{props.category}</div>
        <div className="list_title">{amount.toLocaleString()}원</div>
      </div>
      <div className="list_div" style={{ marginTop: "20px" }}>
        <input
          type="range"
          id="ratio"
          name="ratio"
          min="0"
          max="100"
          step="5"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          onInput={handleInput}
          className={props.isOrigin ? "input_origin" : "input_not_origin"}
        ></input>
        <div>{value}%</div>
      </div>
      {props.isOrigin ? undefined : (
        <div
          style={{ fontSize: "14px", textAlign: "right", marginTop: "20px", color: "#999" }}
          onClick={() => clickForDelete(props.idx)}
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
  const clickForYes = () => {
    navigate("/money-split/select-account");
  };
  const clickForNo = () => {
    navigate("/money-split/add-category");
  };

  const total: number = 3000000;
  const ratio: number = 100;

  useEffect(() => {
    console.log(categoryList);
  }, [categoryList]);

  return (
    <div>
      <MoveBack pageBefore="/money-split" now="ratio" />
      <div className="center_wrap">
        <div>
          <div>
            <div className="black_title">월급 쪼개기 비율을 설정해주세요.</div>
            <div>월 소득</div>
            <div>{total.toLocaleString()}원 중,</div>
          </div>
          <div>
            <Category
              idx={0}
              category="💰 월급 통장"
              total={total}
              ratio={ratio}
              amount={total * ratio * 0.01}
              isOrigin={true}
            />
            {categoryList && categoryList.length > 0
              ? categoryList.map((cate, index) => (
                  <div>
                    <Category idx={index} total={total} category={cate.name} ratio={0} amount={0} />
                  </div>
                ))
              : undefined}
          </div>
          <div className="center_wrap">
            <div className="center_wrap btn">
              <button className="gray_small_btn" type="button" onClick={() => clickForNo()}>
                카테고리 추가
              </button>
              <button className="blue_small_btn" type="button" onClick={() => clickForYes()}>
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
