defmodule WebrunnerWeb.PageController do
  use WebrunnerWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
