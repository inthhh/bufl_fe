import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../splitStyle.css"; // CSS 파일 import
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../loadingSpinner";

const AI_anaLoading: React.FC = () => {
  return (
    <div>
      <LoadingSpinner text="ana" />
    </div>
  );
};

export default AI_anaLoading;
