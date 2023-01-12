import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { databases } from "../appwrite/appwriteConfig";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const promise = databases.createDocument("63bec33622d86f8ed39b", uuidv4(), {
      todo,
    });
    console.log(promise);
    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
    //window.location.reload() // handle it in different way
    e.target.reset();
    //window.location.reload()
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
