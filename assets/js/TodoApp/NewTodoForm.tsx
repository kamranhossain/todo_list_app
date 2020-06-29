import React, { useState } from "react";
import PlusIcon from "./PlusIcon";

interface Props {}

const NewTodoForm = ({}: Props) => {
  const [content, setContent] = useState("");
  return (
    <form className="todo_item new_todo_form">
      <button className="todo_item__toggle"></button>
      <input
        className="todo_item__content"
        name=""
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        autoFocus
      />
    </form>
  );
};

export default NewTodoForm;
