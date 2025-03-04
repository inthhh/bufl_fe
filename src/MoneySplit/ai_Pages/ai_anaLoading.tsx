import React, { useEffect } from "react";
import "../splitStyle.css"; // CSS 파일 import
import LoadingSpinner from "../loadingSpinner";

const AI_anaLoading: React.FC = () => {
  return (
    <div>
      <LoadingSpinner text="ana" />
    </div>
  );
};

export default AI_anaLoading;
