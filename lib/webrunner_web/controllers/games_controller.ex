defmodule WebrunnerWeb.GamesController do
  use WebrunnerWeb, :controller

  def index(conn, _params) do
    conn
    |> assign(:game, Netrunner.Game.build)
    |> render("index.html")
  end

  def update(conn, _params) do
    WebrunnerWeb.Endpoint.broadcast!("rooms:123", "new_msg", %{ msg: :calendar.universal_time() })

    render(conn, "update.html")
  end
end
