import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./splitStyle.css"; // CSS 파일 import
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./loadingSpinner";

const AI_calLoading: React.FC = () => {
  return (
    <div>
      <LoadingSpinner text="cal" />
    </div>
  );
};

export default AI_calLoading;
