import React, { useEffect, useContext } from "react";
import NewsContext from "./Context/NewsContext";

function Login() {
  const { user, GetUserInfo, login } = useContext(NewsContext);
  setTimeout(() => {
    if (localStorage.getItem("email") !== null) {
      window.location = "/world";
    }
  }, 1000);

  useEffect(() => {
    GetUserInfo();
  }, [user]);

  return (
    <div className="h-screen w-[100%] bg-slate-900 flex flex-col justify-center items-center">
      <button
        className="boton-elegante"
        onClick={() => {
          login();
        }}
      >
        Login with Google
      </button>
    </div>
  );
}
export default Login;
