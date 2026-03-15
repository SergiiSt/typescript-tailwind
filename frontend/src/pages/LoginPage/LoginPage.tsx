import React from "react";
import { useNavigate } from "react-router-dom";

type LoginPageProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
};

export default function LoginPage({
  setIsLoggedIn,
  isLoggedIn,
}: LoginPageProps) {
  const navigate = useNavigate();

  function Login() {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  }

  function Logout() {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
  }

  return (
    <>
      <h1 className="text-5xl pt-8 py-8">Login Page</h1>
      {isLoggedIn ? (
        <button
          className="bg-blue-300 px-4 py-2 rounded hover:bg-blue-400"
          onClick={Logout}
        >
          Logout
        </button>
      ) : (
        <button
          className=" bg-blue-300 px-4 py-2 rounded hover:bg-blue-400"
          onClick={Login}
        >
          Login
        </button>
      )}
    </>
  );
}
