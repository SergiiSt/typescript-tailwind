import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

type LoginPageProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
};

type LoginData = {
  username: string;
  password: string;
};

export default function LoginPage({
  setIsLoggedIn,
  isLoggedIn,
}: LoginPageProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function loginUser(data: LoginData) {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Login failed");
    }

    return response.json();
  }

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("success", data);
      navigate("/dashboard");
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutation.mutate({
      username,
      password,
    });
  }

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
