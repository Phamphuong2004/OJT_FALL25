import { BrowserRouter as Router } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <MyNavbar />
      <AppRoutes />
      <ToastContainer />
    </Router>
  );
}

export default App;
