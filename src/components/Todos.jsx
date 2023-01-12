import React, { useState, useEffect } from "react";
import { databases } from "../appwrite/appwriteConfig";

function Todos() {
  const [todos, setTodos] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const getTodos = databases.listDocuments("63bec33622d86f8ed39b");

    getTodos.then(
      function (response) {
        setTodos(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
    setLoader(false);
  }, []);

  const deleteTodo = (id) => {
    const promise = databases.deleteDocument("63bec33622d86f8ed39b", id);
    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
    window.location.reload();
  };

  return (
    <div>
      <p>Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {todos &&
            todos.map((item) => (
              <div key={item.$id}>
                <div>
                  <div>
                    <p>{item.todo}</p>
                  </div>
                  <div>
                    <span
                      onClick={() => {
                        deleteTodo(item.$id);
                      }}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Todos;
