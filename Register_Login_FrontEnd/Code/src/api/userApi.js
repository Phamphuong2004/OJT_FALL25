// userApi.js - Chứa các hàm gọi API liên quan đến user
import axios from "axios";

const API_BASE_URL = "http://localhost:5255/api/User";

export async function registerUser(userData) {
  return axios.post(`${API_BASE_URL}/register`, userData);
}

export async function loginUser(loginData) {
  // Nếu backend có API login riêng, thay đổi URL và body cho phù hợp
  // Ví dụ: POST http://localhost:5000/api/User/login
  return axios.post(`${API_BASE_URL}/login`, loginData);
}

// Lấy danh sách tất cả user
export async function getAllUsers() {
  return axios.get(API_BASE_URL);
}

// Lấy thông tin user theo id
export async function getUserById(id) {
  return axios.get(`${API_BASE_URL}/${id}`);
}

// Cập nhật user theo id
export async function updateUser(id, userData) {
  return axios.put(`${API_BASE_URL}/${id}`, userData);
}

// Xóa user theo id
export async function deleteUser(id) {
  return axios.delete(`${API_BASE_URL}/${id}`);
}
