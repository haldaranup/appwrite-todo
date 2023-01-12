import React from "react";
import { account } from "../appwrite/appwriteConfig.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: ""
  });

  //Signup
  
  const signupUser = async (e) => {
    e.preventDefault();

    const promise = account.create(
      uuidv4(),
      user.email,     
      user.password,
      user.name

    );

    promise.then(
      function (response) {
        console.log(response);
        navigate("/login");
      },
      function (error) {
        console.log(error.message);
      }
    );
  };

  return (
    <div>
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
          type="text"
          name="name"
          id="name"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
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
          <button type="submit" onClick={signupUser}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default signup;
