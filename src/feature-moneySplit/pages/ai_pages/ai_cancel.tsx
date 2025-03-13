import Fade from "../../../shared/Fade";
import MoveBack from "../../../shared/MoveBack";

const AI_Cancel: React.FC = () => {
  return (
    <Fade>
      <div>
        <MoveBack pageBefore="/money-split/ai/analysis" />
        <div style={{ margin: "80px 30px" }}>
          <div>
            해당 분석은 과거의 소비 카테고리를
            <br />
            기반으로 하고 있어요.
          </div>
          <br />
          <strong>
            3개월 동안의 소비 내역을
            <br />
            카테고리에 맞게 분류해준 후,
            <br />
            다시 시도해주세요.
          </strong>
        </div>
        <div className="center_wrapper">
          <div className="center_wrapper btn">
            <button type="button" className="blue_big_btn" style={{ marginBottom: "10px" }}>
              소비내역 수정하러 가기
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AI_Cancel;
