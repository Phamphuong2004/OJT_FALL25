import React, { useEffect, useState } from "react";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../api/userApi";
import "./ManageUser.css";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", status: "" });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res.data);
    } catch {
      setUsers([]);
    }
  };

  const handleSelectUser = async (id) => {
    try {
      const res = await getUserById(id);
      setSelectedUser(res.data);
      setEditMode(false);
    } catch {}
  };

  const handleEdit = () => {
    setForm({
      username: selectedUser.username,
      email: selectedUser.email,
      status: selectedUser.status,
    });
    setEditMode(true);
  };

  const handleUpdate = async () => {
    try {
      await updateUser(selectedUser.id, form);
      alert("Cập nhật thành công!");
      setEditMode(false);
      fetchUsers();
      handleSelectUser(selectedUser.id);
    } catch {
      alert("Cập nhật thất bại!");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa user này?")) return;
    try {
      await deleteUser(id);
      alert("Xóa thành công!");
      setSelectedUser(null);
      fetchUsers();
    } catch {
      alert("Xóa thất bại!");
    }
  };

  return (
    <div className="manage-user-container">
      <div className="manage-user-title">Quản lý User</div>
      <div className="manage-user-flex">
        <div className="manage-user-list">
          <h3>Danh sách User</h3>
          <ul>
            {users.map((u) => (
              <li key={u.id}>
                <button onClick={() => handleSelectUser(u.id)}>
                  {u.username}
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(u.id)}
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="manage-user-detail">
          {selectedUser && !editMode && (
            <div>
              <h3>Thông tin User</h3>
              <p>
                <b>ID:</b> {selectedUser.id}
              </p>
              <p>
                <b>Username:</b> {selectedUser.username}
              </p>
              <p>
                <b>Email:</b> {selectedUser.email}
              </p>
              <p>
                <b>Status:</b> {selectedUser.status}
              </p>
              <button onClick={handleEdit}>Sửa</button>
            </div>
          )}
          {selectedUser && editMode && (
            <div>
              <h3>Sửa User</h3>
              <input
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                placeholder="Username"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
              />
              <input
                type="text"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                placeholder="Status"
              />
              <button onClick={handleUpdate}>Lưu</button>
              <button onClick={() => setEditMode(false)}>Hủy</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
