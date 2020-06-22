import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import TodoItem from "./types/TodoItem";

interface TodoItemQueryResult {
  todoItems: TodoItem[];
}

const TodoList = () => {
  const { data, loading } = useQuery<TodoItemQueryResult>(gql`
    {
      todoItems {
        id
        content
        isCompleted
      }
    }
  `);

  return (
    <div className="todo_list">
      <h3 className="todo_list__header">Todo Items</h3>
      <ul className="todo_list__list">
        {data?.todoItems
          ? data.todoItems.map((Item) => (
              <li
                key={Item.id}
                className={
                  Item.isCompleted
                    ? "todo_list__item todo_list__item--completed"
                    : "todo_list__item"
                }
              >
                {Item.content}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default TodoList;
