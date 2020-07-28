defmodule TodoListApp.Todos.Item do
  @moduledoc false

  use Ecto.Schema
  import Ecto.Changeset

  schema "items" do
    field :completed_at, :utc_datetime
    field :content, :string

    timestamps()
  end

  @doc false
  def changeset(item, attrs) do
    item
    |> cast(attrs, [:content, :completed_at])
    |> validate_required([:content])
  end
end
