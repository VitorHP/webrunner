defmodule WebrunnerWeb.Router do
  use WebrunnerWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", WebrunnerWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/games", GamesController, :index
    get "/games/update", GamesController, :update
  end

  # Other scopes may use custom stacks.
  # scope "/api", WebrunnerWeb do
  #   pipe_through :api
  # end
end
