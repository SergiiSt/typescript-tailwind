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

  //   console.log(isLoggedIn);

  return (
    <>
      <h1 className="text-red-500">Login Page</h1>
      {isLoggedIn ? (
        <button>Logout</button>
      ) : (
        <button
          className="bg-red-600 text-blue-600 px-4 py-2 rounded hover:bg-red-700 hover:text-blue-700"
          onClick={Login}
        >
          Login
        </button>
      )}
    </>
  );
}
