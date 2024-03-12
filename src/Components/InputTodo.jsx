import React, { useState } from "react";
import Button from "./Button";

function InputTodo() {
  const [description, setdescription] = useState("");

  function HandleChange(e) {
    const { value } = e.target;

    setdescription(value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    if (description == "") {
      alert("Please find something to do😭😢!");
    } else {
      try {
        const data = { description: description };

        const response = await fetch("http://localhost:5000/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.error(error.message);
      }
    }
    window.location = "/";
  };
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={description}
          onChange={HandleChange}
          placeholder="ENTER TASK........"
        />
        <Button name="Add" />
      </form>
    </div>
  );
}

export default InputTodo;
