import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import DashboardPage from "./pages/DashboardPage/DashboardPage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true",
  );

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {!isLoggedIn ? null : <Link to="/dashboard">Dashboard</Link>}
        {/* <Link to="/dashboard">Dashboard</Link> */}
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {!isLoggedIn ? null : (
          <Route path="/dashboard" element={<DashboardPage />} />
        )}
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        <Route
          path="/login"
          element={
            <LoginPage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          }
        />
      </Routes>
    </>
  );
}
export default App;
