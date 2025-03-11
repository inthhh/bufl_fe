import { useNavigate } from "react-router-dom";
import BackImg from "./images/left-arrow.png";
import { useState } from "react";
import "./style/splitStyle.css";

interface MoveBackProps {
  pageBefore: string;
  now?: string;
}

const MoveBack: React.FC<MoveBackProps> = ({ pageBefore, now }) => {
  const navigate = useNavigate();
  const [ratioModalOpen, setRatioModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const movePage = () => {
    if (now) {
      if (now === "ratio") {
        // 팝업
        setRatioModalOpen(true);
      }
      if (now === "account") {
        // 팝업
        setAccountModalOpen(true);
      }
    } else navigate(pageBefore);
  };

  const clickForBack = () => {
    setAccountModalOpen(false);
    setRatioModalOpen(false);
    navigate(pageBefore);
  };

  const clickForCancel = () => {
    setAccountModalOpen(false);
    setRatioModalOpen(false);
  };
  return (
    <div>
      <img src={BackImg} alt="back-arrow" width={38} className="back-arrow" onClick={movePage}></img>
      {ratioModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p style={{ margin: "40px 0 30px 0" }}>
              <strong>첫 화면으로 돌아가시겠어요?</strong>
              <br />그 동안의 변경 내용은 사라져요.
            </p>
            <div className="modal-buttons">
              <button className="confirm" onClick={clickForBack}>
                확인
              </button>
              <button className="cancel" onClick={clickForCancel}>
                취소
              </button>
            </div>
          </div>
        </div>
      )}
      {accountModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p style={{ margin: "40px 0 30px 0" }}>
              <strong>
                카테고리 및 비율 설정으로
                <br /> 돌아가시겠어요?
              </strong>
              <br />
              현재 페이지의 변경 내용은 사라져요.
            </p>
            <div className="modal-buttons">
              <button className="confirm" onClick={clickForBack}>
                확인
              </button>
              <button className="cancel" onClick={clickForCancel}>
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MoveBack;
