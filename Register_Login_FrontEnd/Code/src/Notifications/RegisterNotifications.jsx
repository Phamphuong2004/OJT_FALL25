import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function showRegisterSuccess() {
  toast.success("Đăng ký thành công!", { position: "top-right" });
}

export function showRegisterFailure() {
  toast.error("Đăng ký thất bại!", { position: "top-right" });
}

export function showRegisterError() {
  toast.error("Lỗi kết nối tới server hoặc dữ liệu không hợp lệ!", {
    position: "top-right",
  });
}

export function showRegisterDuplicate() {
  toast.warning(
    "Tên đăng nhập hoặc email đã tồn tại. Vui lòng chọn tên khác!",
    { position: "top-right" }
  );
}
