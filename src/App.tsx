import { useState } from "react";
import { sendLoginRequest } from "./ipcs/login";
import { LoginPage } from "./pages/Login";

function App() {
  const [greetMsg, setGreetMsg] = useState(123);
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg((await sendLoginRequest("")).status);
  }

  return <LoginPage />;
}

export default App;
