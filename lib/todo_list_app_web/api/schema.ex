defmodule TodoListWeb.Api.Schema do
  use Absinthe.Schema

  query do
    field :hello, :string do
      resolve fn _, _ ->
        {:ok, "Hellow world!"}
      end
    end
  end
end
