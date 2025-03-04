import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  console.log(token)
  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return <>{children}</>;
}

export default PrivateRoute;
