import React, { useCallback } from "react";
import TodoItem from "./types/TodoItem";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const TOGGLE_TODO_ITEM = gql`
  mutation($id: ID!) {
    toggleTodoItem(id: $id) {
      id
      isCompleted
    }
  }
`;

const TodoListItem = ({ id, content, isCompleted }: TodoItem) => {
  const [toggleItem] = useMutation(TOGGLE_TODO_ITEM);
  const handleToggle = useCallback(() => {
    toggleItem({ variables: { id } });
  }, [id, toggleItem]);

  return (
    <div className="todo_item">
      <button
        className={`todo_item__toggle ${
          isCompleted ? "todo_item__toggle--completed" : ""
        }`}
        onClick={handleToggle}
      />
      <input className="todo_item__content" value={text} onChange={onChange} />
    </div>
  );
};

export default TodoListItem;
