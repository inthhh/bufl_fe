import React, { useEffect, useState } from "react";
import "./splitStyle.css"; // CSS 파일 import
import { useNavigate } from "react-router-dom";
import MoveBack from "./MoveBack";

const SelectAccountAccounts: React.FC = () => {
  const navigate = useNavigate();
  const clickForYes = () => {
    navigate("/money-split/select-account/detail");
  };
  return (
    <div>
      <MoveBack pageBefore="/money-split/select-account/detail" />
      <div className="center_wrap">
        <div>
          <div>“생활비” 목적으로 사용할 통장을 선택해주세요.</div>
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          </div>
          <div className="center_wrap">
            <div className="center_wrap btn">
              <button className="blue_big_btn" type="button" onClick={() => clickForYes()}>
                완료했어요.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAccountAccounts;
