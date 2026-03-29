import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

import { useState } from "react";

type LoginPageProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
};

export default function LoginPage({
  setIsLoggedIn,
  isLoggedIn,
}: LoginPageProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useLogin({ setIsLoggedIn });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    loginMutation.mutate({
      username,
      password,
    });
  }
  const navigate = useNavigate();
  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
  }

  return (
    <>
      <h1 className="text-5xl pt-8 py-8">Login Page</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button type="submit">login</button>
        </form>
      )}
    </>
  );
}
