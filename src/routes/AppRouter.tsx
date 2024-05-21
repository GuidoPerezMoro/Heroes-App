import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Login } from "../components/screens/Login/Login";

export const AppRouter = () => {
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  return (
    <>
      <Routes>
        {isLogged ? (
          <Route path="/*" element={<ProtectedRoutes />} />
        ) : (
          <Route path="/*" element={<Navigate to={"/login"} />} />
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
