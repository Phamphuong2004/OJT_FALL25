import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import { loginUser } from "../api/userApi";
import {
  showLoginSuccess,
  showLoginFailure,
  showLoginError,
  showLoginUnauthorized,
} from "../Notifications/LoginNotifications";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      username: username,
      password: password,
    };
    try {
      const response = await loginUser(loginData);
      if (response.status === 200 || response.status === 201) {
        showLoginSuccess();
        localStorage.setItem("loggedInUser", username);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        showLoginFailure();
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        showLoginUnauthorized();
      } else {
        showLoginError();
      }
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} autoComplete="off">
      <h2>Đăng nhập</h2>
      <input
        type="text"
        name="user_name"
        placeholder="Tên đăng nhập"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        autoComplete="off"
      />
      <input
        type="password"
        name="new_password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete="new-password"
      />
      <button type="submit">Đăng nhập</button>
    </form>
  );
};

export default LoginForm;
