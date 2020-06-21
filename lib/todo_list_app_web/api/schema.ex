defmodule TodoListAppWeb.Api.Schema do
  use Absinthe.Schema

  object :todo_item do
    field :id, non_null(:id)
    field :content, non_null(:string)

    field :is_completed, non_null(:boolean) do
      resolve(fn %{completed_at: completed_at}, _, _ ->
        {:ok, !is_nil(completed_at)}
      end)
    end
  end

  query do
    field :hello, :string do
      resolve fn _, _ ->
        {:ok, "Hellow world!"}
      end
    end

    # [TodoItem!]!
    field :todo_items, non_null(list_of(:todo_item)) do
      resolve(fn _, _ ->
        {:ok, TodoListApp.Todos.list_items()}
      end)
    end
  end
end
