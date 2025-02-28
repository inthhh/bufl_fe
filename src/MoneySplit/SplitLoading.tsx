import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./splitStyle.css"; // CSS 파일 import
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./loadingSpinner";

const SplitLoading: React.FC = () => {
  return (
    <div>
      <LoadingSpinner text="split" />
    </div>
  );
};

export default SplitLoading;
