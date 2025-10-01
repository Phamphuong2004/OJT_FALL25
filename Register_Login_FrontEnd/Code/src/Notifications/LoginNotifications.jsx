import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function showLoginSuccess() {
  toast.success("Đăng nhập thành công!", { position: "top-right" });
}

export function showLoginFailure() {
  toast.error("Đăng nhập thất bại!", { position: "top-right" });
}

export function showLoginError() {
  toast.error("Lỗi kết nối tới server hoặc dữ liệu không hợp lệ!", {
    position: "top-right",
  });
}

export function showLoginUnauthorized() {
  toast.warning("Sai tên đăng nhập hoặc mật khẩu!", { position: "top-right" });
}
