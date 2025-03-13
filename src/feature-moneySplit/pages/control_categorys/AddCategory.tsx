import React, { useEffect, useState } from "react";
import "../../style/splitStyle.css"; // CSS 파일 import
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../../redux/actions/categoryAction";
import { RootState } from "../../../redux/store";

import MoveBack from "../../../shared/MoveBack";

const AddCategory: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [color, setColor] = useState<string>("#d0defa");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categoryList = useSelector((state: RootState) => state.category.categoryList);

  let newItem = {
    name: name,
    goal: Number(goal),
    color: color,
    ratio: 0,
  };

  const clickForYes = () => {
    console.log(name, goal, color);
    dispatch(setCategories([...categoryList, newItem]));
    navigate("/money-split/select-ratio");
  };

  return (
    <div>
      <MoveBack pageBefore="/money-split/select-ratio" />
      <div className="center_wrapper">
        <div>
          <div className="black_title">카테고리 추가</div>
          <form className="auth-form" style={{ width: "330px" }}>
            <div>
              <label htmlFor="name">카테고리 이름</label>
              <br />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=""
                className="category_input"
              />
            </div>

            <div>
              <label htmlFor="amount">목표 금액(선택)</label>
              <br />
              <input
                type="number"
                id="amount"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder=""
                className="category_input"
              />
            </div>

            <div className="space_between">
              <p className="">배경색</p>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="" />
            </div>
          </form>
          <div className="center_wrapper">
            <button className="blue_big_btn" type="button" onClick={() => clickForYes()}>
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
