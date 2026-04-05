import HomeInfo from "../../components/HomeInfo/HomeInfo";
import useGetUser from "../../hooks/useGetUser";

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
