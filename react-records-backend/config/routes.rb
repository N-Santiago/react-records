Rails.application.routes.draw do
  # resources :albums, only: [:index, :show, :create, :destroy]
  # resources :categories, only: [:index]
  resources :categories do
    resources :albums
  end 
  resources :albums
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
