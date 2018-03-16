Rails.application.routes.draw do
  root to: "pages#index", as: :root
  get "/pages/login" => "users#login", as: :login
  get "/pages/signup" => "users#signup", as: :signup
  get "pages/:page" => "pages#page", as: :page
  resources :pages do
    resources :active_responders, :overview_map, :responder_gpsm, :vehicle_gps
  end
end
