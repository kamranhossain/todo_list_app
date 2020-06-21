defmodule TodoListApp.Repo do
  use Ecto.Repo,
    otp_app: :todo_list_app,
    adapter: Ecto.Adapters.Postgres
end
