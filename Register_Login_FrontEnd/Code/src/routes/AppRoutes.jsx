import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../Form/LoginForm";
import RegisterForm from "../Form/RegisterForm";
import ManageUser from "../Manage User/ManageUser";

const Home = () => (
  <div style={{ textAlign: "center", marginTop: "2rem" }}>
    <h2>Chào mừng đến với trang đăng nhập của chúng tôi</h2>
    <p>Vui lòng dăng nhập để tiếp tục sử dụng</p>
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/manage-user" element={<ManageUser />} />
    </Routes>
  );
};

export default AppRoutes;
