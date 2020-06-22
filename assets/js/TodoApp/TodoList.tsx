import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import TodoItem from "./types/TodoItem";
import TodoListItem from "./TodoListItem";

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
      <div className="todo_list__list">
        {data?.todoItems?.map((item: TodoItem) => (
          <TodoListItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
