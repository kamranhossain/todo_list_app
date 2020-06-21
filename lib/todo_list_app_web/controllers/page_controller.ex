defmodule TodoListAppWeb.PageController do
  use TodoListAppWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
