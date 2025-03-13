import React, { useEffect } from "react";
import "../../style/splitStyle.css"; // CSS 파일 import
import LoadingSpinner from "../../../shared/loadingSpinner";
import Fade from "../../../shared/Fade";

const SplitLoading: React.FC = () => {
  return (
    <Fade>
      <div>
        <LoadingSpinner text="split" />
      </div>
    </Fade>
  );
};

export default SplitLoading;
