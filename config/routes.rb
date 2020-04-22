Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users
  # resources :invoices
  namespace :api, defaults: {format: :json} do
    resources :cars, only: [:index, :show, :create, :update, :destroy]
    resources :jobs, only: [:index, :show, :create, :update, :destroy]
    resources :parts, only: [:index, :show, :create, :update, :destroy]
    resources :services, only: [:index, :show, :create, :update, :destroy]
    resources :users
    # , only: [:index, :show, :create,:update]
    resources :sessions, only: [:create, :destroy, :show]
    # resource :favorites, only: [:create, :destroy]
  end
  root "static_pages#root"
end
