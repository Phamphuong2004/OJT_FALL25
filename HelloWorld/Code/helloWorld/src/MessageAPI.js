import axios from "axios";

export default async function getMessage() {
  const response = await axios.get("/api/Message/messages");
  return response.data;
}
