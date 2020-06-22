import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

interface TodoItem {
    id: number | string;
    content: string;
    isCompleted: boolean;
}

interface TodoItemQueryResult {
    todoItems: TodoItem[];
}


const TodoList = () => {
    const {data, loading} = useQuery<TodoItemQueryResult>(gql`
        {
            todoItems{
                id content isCompleted
            }
        }
    `)

    return( 
    <div>
        <h3>Todo Items</h3>
        <ul>
            { data?.todoItems ? data.todoItems.map(Item => (
                <li key={Item.id} className={Item.isCompleted? "completed" : ""}>
                    {Item.content}
                </li>
            ))
            : null}
        </ul>
    </div>
    );
};

export default TodoList;