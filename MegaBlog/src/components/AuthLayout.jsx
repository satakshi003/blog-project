import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AuthLayout({ children, authentication = true }) {

  const authStatus = useSelector(state => state.auth.status);

  // If route requires login and user is NOT logged in
  if (authentication && !authStatus) {
    return <Navigate to="/login" replace />;
  }

  // If route is login/signup and user IS logged in
  if (!authentication && authStatus) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}