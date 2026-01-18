import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function logoutBtn() {
  return(
    <div>LogoutBtn</div>
  )
}

export default logoutBtn