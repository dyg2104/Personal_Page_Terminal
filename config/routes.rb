PersonalPageTerminal::Application.routes.draw do
  root to: "static_pages#root"
  get "/bio", to: "static_pages#root"
  get "/resume", to: "static_pages#resume"
  get "/projects", to: "static_pages#projects"
end
