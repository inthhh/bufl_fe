import { useNavigate } from "react-router-dom";
import LogoImg from "../images/logo.png";
import "../style/style.css";

function StartPage() {
  const navigate = useNavigate();
  return (
    <div>
      <img src={LogoImg} alt="logo" width="100px"/>
      <p>버플과 함께 소중한 내 월급 관리를 한번에!</p>
      <button onClick={()=>navigate("/sign/personal-info")}>시작하기</button>
    </div>
  ) 
}

export default StartPage;