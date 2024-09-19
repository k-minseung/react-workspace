import React from "react";
import { Navigate } from 'react-router-dom';

function NotFound() {
  // 사용자를 홈 페이지로 리다이렉트
  return <Navigate to="/" />;
}

export default NotFound;