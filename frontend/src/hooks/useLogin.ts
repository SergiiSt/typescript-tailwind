import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

type LoginData = {
  username: string;
  password: string;
};

type LoginResponse = {
  id: number;
  username: string;
};

async function loginUser(data: LoginData): Promise<LoginResponse> {
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

export default function useLogin({
  setIsLoggedIn,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // console.log("success", data.id);
      localStorage.setItem("userId", data.id.toString());

      navigate("/dashboard");
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    },
    onError: (error) => {
      console.error(error);
    }, 
  });
}
