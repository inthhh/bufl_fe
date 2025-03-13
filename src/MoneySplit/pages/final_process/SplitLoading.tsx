import React, { useEffect } from "react";
import "../../style/splitStyle.css"; // CSS 파일 import
import LoadingSpinner from "../../utils/loadingSpinner";

const SplitLoading: React.FC = () => {
  return (
    <div>
      <LoadingSpinner text="split" />
    </div>
  );
};

export default SplitLoading;
