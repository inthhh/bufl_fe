import React, { useEffect } from "react";
import "../../style/splitStyle.css"; // CSS 파일 import
import LoadingSpinner from "../../../shared/loadingSpinner";
import Fade from "../../../shared/Fade";

const AI_calLoading: React.FC = () => {
  return (
    <Fade>
      <div>
        <LoadingSpinner text="cal" />
      </div>
    </Fade>
  );
};

export default AI_calLoading;
