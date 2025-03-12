import React, { useEffect, useState } from "react";
import "./settingStyle.css";
import ProfileImg from "./profile.jpeg";
import Bottom from "../bottom_nav/bottom";
import RightArrow from "./right-arrow.png";

interface menuProps {
  menuName: string;
}

const MenuComponent: React.FC<menuProps> = ({ menuName }) => {
  return (
    <div className="menu-component-wrap">
      {menuName}
      <img src={RightArrow} alt="" width={12} height={14} />
    </div>
  );
};

const Profile: React.FC = () => {
  const [userName, setUserName] = useState<string>("뱅크닌자");
  useEffect(() => {
    // user api
  }, []);
  return (
    <div className="profile-component-wrap">
      <img
        src={ProfileImg}
        alt=""
        width={50}
        height={45}
        style={{ borderRadius: "30px", border: "0.5px solid lightgrey" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "350px",
          padding: "0 10px",
        }}
      >
        <div>
          {userName}
          <div className="menu-small-text">내 정보 수정하기</div>
        </div>
        <img src={RightArrow} alt="" width={12} height={14} />
      </div>
    </div>
  );
};

const Setting: React.FC = () => {
  return (
    <div style={{ height: "730px", backgroundColor: "#F3F3F3" }}>
      <div style={{ height: "70px" }}></div>
      <div className="menu-top-border">
        <Profile />
      </div>

      <div className="menu-top-border">
        <MenuComponent menuName="알림" />
        <MenuComponent menuName="계좌 관리" />
      </div>

      <div className="menu-top-border">
        <MenuComponent menuName="인증서" />
        <MenuComponent menuName="보안" />
        <MenuComponent menuName="약관 및 정책" />
        <MenuComponent menuName="FAQ" />
        <MenuComponent menuName="고객센터" />
      </div>

      <div className="menu-top-border">
        <MenuComponent menuName="탈퇴하기" />
      </div>
      <Bottom page="menu" />
    </div>
  );
};

export default Setting;
