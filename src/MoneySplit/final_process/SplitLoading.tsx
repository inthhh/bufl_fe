import React, { useEffect } from "react";
import "../splitStyle.css"; // CSS 파일 import
import LoadingSpinner from "../loadingSpinner";

const SplitLoading: React.FC = () => {
  return (
    <div>
      <LoadingSpinner text="split" />
    </div>
  );
};

export default SplitLoading;
