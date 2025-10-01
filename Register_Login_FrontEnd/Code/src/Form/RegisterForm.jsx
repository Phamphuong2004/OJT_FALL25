import React, { useState } from "react";
import "./Form.css";
import { registerUser } from "../api/userApi";
import {
  showRegisterSuccess,
  showRegisterFailure,
  showRegisterError,
  showRegisterDuplicate,
} from "../Notifications/RegisterNotifications";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
      fullName,
      phone,
    };
    try {
      const response = await registerUser(userData);
      if (response.status === 200 || response.status === 201) {
        showRegisterSuccess();
      } else {
        showRegisterFailure();
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errMsg = error.response.data.toString();
        if (
          errMsg.includes("duplicate key") ||
          errMsg.includes("unique constraint")
        ) {
          showRegisterDuplicate();
        } else {
          showRegisterError();
        }
      } else {
        showRegisterError();
      }
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Đăng ký</h2>
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
        type="email"
        name="register_email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <input
        type="text"
        name="full_name"
        placeholder="Họ và tên"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        autoComplete="off"
      />
      <input
        type="text"
        name="phone"
        placeholder="Số điện thoại"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        autoComplete="off"
      />
      <button type="submit">Đăng ký</button>
    </form>
  );
};

export default RegisterForm;
