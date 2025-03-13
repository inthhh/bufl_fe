import React, { useEffect } from "react";
import "../../style/splitStyle.css"; // CSS 파일 import
import LoadingSpinner from "../../../shared/loadingSpinner";

const SplitLoading: React.FC = () => {
  return (
    <div>
      <LoadingSpinner text="split" />
    </div>
  );
};

export default SplitLoading;
