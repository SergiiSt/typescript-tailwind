import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import DashboardPage from "./pages/DashboardPage/DashboardPage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import PrivatRoute from "./components/PrivatRoute/PrivatRoute.tsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true",
  );

  return (
    <>
      {
        <Routes>
          <Route element={<Layout isLoggedIn={isLoggedIn} />}>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/dashboard"
              element={
                <PrivatRoute isLoggedIn={isLoggedIn}>
                  <DashboardPage />
                </PrivatRoute>
              }
            />
            <Route
              path="/login"
              element={
                <LoginPage
                  setIsLoggedIn={setIsLoggedIn}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
          </Route>
        </Routes>
      }
    </>
  );
}
export default App;
