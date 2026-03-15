import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type PrivatRouteProps = {
  children: ReactNode;
  isLoggedIn: boolean;
};

export default function PrivatRoute({
  children,
  isLoggedIn,
}: PrivatRouteProps) {
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
}
