import React, { useEffect } from "react";
import "../../style/splitStyle.css"; // CSS 파일 import
import LoadingSpinner from "../../utils/loadingSpinner";

const AI_calLoading: React.FC = () => {
  return (
    <div>
      <LoadingSpinner text="cal" />
    </div>
  );
};

export default AI_calLoading;
