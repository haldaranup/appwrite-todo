import React, { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate, Link } from "react-router-dom";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function Profile() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
        //console.log(userDetails);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userDetails ? (
        <>
          <div>
            <div>
              <p>Hello {userDetails.name}</p>
            </div>
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
          <TodoForm />
          <Todos />
        </>
      ) : (
        <p>
          Please Login To see Profile{" "}
          <Link to="/">
            <span>Login</span>
          </Link>
        </p>
      )}
    </>
  );
}

export default Profile;
