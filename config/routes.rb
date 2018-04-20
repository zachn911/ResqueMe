Rails.application.routes.draw do
  root to: "dashboard#index", as: :root
  get "/pages/login" => "users#login", as: :login
  get "/pages/signup" => "users#signup", as: :signup
  get "pages/:page" => "pages#page", as: :page
  get "activeresponders/:acr" => "activeresponders#acr", as: :acr
  resources :activeresponders
  get "dashboard/:dash" => "dashboard#dash", as: :dash
  resources :dashboard
  get "respondersgps/:rgps" => "respondersgps#rgps", as: :rgps
  resources :respondersgps
  get "vehiclegps/:vgps" => "vehiclegps#vgps", as: :vgps
  resources :vehiclegps
  get "overviewmap/:omap" => "overviewmap#omap", as: :omap
  resources :overviewmap
  get "stats/:stat" => "stats#stat", as: :stat
  resources :stats
  get "about/:a" => "about#a", as: :a
  resources :about
  get "settingso/:so" => "settingso#so", as: :so
  resources :settingso
  get "/activeresponders/live_table" => "activeresponders#live_table"
end
