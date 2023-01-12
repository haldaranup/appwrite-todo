import React, { useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(user.email, user.password);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return <div>
  <form action="#" method="POST">
    <input
      type="email"
      name="email"
      id="email"
      onChange={(e) => {
        setUser({
          ...user,
          email: e.target.value,
        });
      }}
    />
    
    <input
      type="password"
      name="password"
      id="password"
      onChange={(e) => {
        setUser({
          ...user,
          password: e.target.value,
        });
      }}
    />
    <div>
      <button type="submit" onClick={loginUser}>
        Sign up
      </button>
    </div>
  </form>
</div>;
}

export default Login;
