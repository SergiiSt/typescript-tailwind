import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Layout({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <>
      <header>
        <nav className="flex justify-center gap-7">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
          >
            Home
          </NavLink>
          {!isLoggedIn ? null : (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : ""
              }
            >
              Dashboard
            </NavLink>
          )}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
          >
            Login
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
