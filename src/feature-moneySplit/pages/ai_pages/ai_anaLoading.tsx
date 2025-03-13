import React, { useEffect } from "react";
import "../../style/splitStyle.css"; // CSS 파일 import
import LoadingSpinner from "../../../shared/loadingSpinner";

const AI_anaLoading: React.FC = () => {
  return (
    <div>
      <LoadingSpinner text="ana" />
    </div>
  );
};

export default AI_anaLoading;
