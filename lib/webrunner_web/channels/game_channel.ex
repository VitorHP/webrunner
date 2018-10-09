defmodule WebrunnerWeb.GameChannel do
  use Phoenix.Channel

  intercept ["new_msg"]

  def join("room:123", _message, socket) do
    { :ok, Netrunner.Game.setup, socket }
  end

  def handle_out("update", payload, socket) do
    push socket, "new_msg", payload

    { :noreply, socket }
  end
end
