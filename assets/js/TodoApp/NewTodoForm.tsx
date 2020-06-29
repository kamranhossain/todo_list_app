import React, { useState, FormEvent } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const CREATE_TODO_ITEM = gql`
  mutation createTodoItem($content: String!) {
    createTodoItem(content: $content) {
      id
      content
      isCompleted
    }
  }
`;

interface Props {}

const NewTodoForm = ({}: Props) => {
  const [content, setContent] = useState("");
  const [createTodo] = useMutation(CREATE_TODO_ITEM);
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
