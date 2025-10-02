import React, { useState } from "react";
import { updateUser } from "../api/userApi";
import "./Form.css";

export default function EditUserForm({ user, onSave }) {
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState(user?.password || "");
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [status, setStatus] = useState(user?.status || "active");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      id: user.id,
      username,
      email,
      password,
      fullName,
      phone,
      status,
    };
    try {
      await updateUser(user.id, updatedUser);
      alert("Cập nhật thành công!");
      if (onSave) onSave();
    } catch (error) {
      alert("Cập nhật thất bại!");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Chỉnh sửa thông tin người dùng</h2>
      <input
        type="text"
        placeholder="Tên đăng nhập"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Họ và tên"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Số điện thoại"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button type="submit">Lưu thay đổi</button>
    </form>
  );
}
