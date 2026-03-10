import React from "react";
import { useNavigate } from "react-router-dom";

type LoginPageProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginPage({ setIsLoggedIn }: LoginPageProps) {
  const navigate = useNavigate();

  function Login() {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  }

  //   console.log(isLoggedIn);

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={Login}>Login</button>
    </>
  );
}
