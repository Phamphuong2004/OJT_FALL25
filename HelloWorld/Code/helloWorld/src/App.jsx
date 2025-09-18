import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import GozillaVsKingKong from "./assets/Gozilla_vs_king_kong.jpg";
import { useEffect, useState } from "react";
import getMessage from "./MessageAPI";

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getMessage()
      .then((data) => {
        setMessages(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        setError("Không thể lấy dữ liệu từ API");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <MyNavbar />
      <div className="app-background">
        <div className="battlefield card-style">
          <img
            src={GozillaVsKingKong}
            alt="Gozilla vs King Kong"
            className="main-godzilla-img styled-img"
          />
          <div className="hello-title-on-img text-block">
            {loading && <div className="loading-text">Đang tải...</div>}
            {error && <div className="error-text">{error}</div>}
            {!loading &&
              !error &&
              messages.map((item) => (
                <div className="message-text" key={item.id}>
                  {item.text}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
