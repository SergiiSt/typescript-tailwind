import HomeInfo from "../../components/HomeInfo/HomeInfo";
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

function useGetUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
}

export default function HomePage() {
  const { data: user, isLoading, error } = useGetUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading user data</p>;
  }
  return (
    <>
      <h1 className="text-5xl pt-8">Home page</h1>
      <HomeInfo />
      {!user ? null : (
        <p className="text-7xl mt-8">Welcome, {user.username}!</p>
      )}
    </>
  );
}
