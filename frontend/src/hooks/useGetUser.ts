import { useQuery } from "@tanstack/react-query";

type User = {
  id: number;
  username: string;
};

async function fetchUser(): Promise<User> {
  const idFromStorage = localStorage.getItem("userId");
  const response = await fetch(`/auth/${idFromStorage}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export default function useGetUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
}
