import React, { useEffect, useState } from "react";
import Button from "./Button";

function TodoItem(props) {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState();
  const getTodos = async () => {
    try {
      const response = await fetch("https://todo-backend7.onrender.com/api/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  //deletes a todo item
  const handledelete = async (id) => {
   
    const response = await fetch(`https://todo-backend7.onrender.com/api/todos/${id}`, {
      method: "DELETE",
    });
    window.location = "/";
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  //Update a todo
  const updateTodo = async (id, updatedDescription) => {
    try {
      const updatedTodos = todos.map((todo) =>
        todo.todo_id === id
          ? { ...todo, description: updatedDescription }
          : todo
      );

      const Update = await fetch(`https://todo-backend7.onrender.com/api/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: updatedDescription }),
      });

      if (Update.ok) {
        setTodos(updatedTodos);
        console.log("Todo updated successfully");
      } else {
        console.error("Failed to update todo");
      }
    } catch (error) {
      console.error("Error updating todo:", error.message);
    }
  };

  const HandleEdit = async (todo) => {
    console.log(todo);
    const editable = window.prompt(
      `Edit ${todo.description}`,
      todo.description
    );
    console.log(editable);

    if (editable !== null && editable !== todo.description) {
      updateTodo(todo.todo_id, editable);
    }
  };

  return (
    <>
      {todos.map((todo) => (
        <div className="TodoItem" key={todo.todo_id}>
          <p>{todo.description}</p>
          <Button name="Edit" action={() => HandleEdit(todo)} />
          <Button name="Delete" action={() => handledelete(todo.todo_id)} />
        </div>
      ))}
    </>
  );
}

export default TodoItem;
