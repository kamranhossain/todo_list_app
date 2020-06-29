import React from "react";
import PlusIcon from "./PlusIcon";

interface Props {}

const NewTodoButton = ({}: Props) => {
  return (
    <button className="new_todo_button">
      <span className="new_todo_button__icon">
        <PlusIcon />
      </span>
      New Reminder
    </button>
  );
};

export default NewTodoButton;
