# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                  api_cars GET    /api/cars(.:format)                                                                      api/cars#index {:format=>:json}
#                           POST   /api/cars(.:format)                                                                      api/cars#create {:format=>:json}
#               new_api_car GET    /api/cars/new(.:format)                                                                  api/cars#new {:format=>:json}
#                   api_car GET    /api/cars/:id(.:format)                                                                  api/cars#show {:format=>:json}
#                           PATCH  /api/cars/:id(.:format)                                                                  api/cars#update {:format=>:json}
#                           PUT    /api/cars/:id(.:format)                                                                  api/cars#update {:format=>:json}
#                           DELETE /api/cars/:id(.:format)                                                                  api/cars#destroy {:format=>:json}
#                  api_jobs GET    /api/jobs(.:format)                                                                      api/jobs#index {:format=>:json}
#                           POST   /api/jobs(.:format)                                                                      api/jobs#create {:format=>:json}
#               new_api_job GET    /api/jobs/new(.:format)                                                                  api/jobs#new {:format=>:json}
#                   api_job GET    /api/jobs/:id(.:format)                                                                  api/jobs#show {:format=>:json}
#                           PATCH  /api/jobs/:id(.:format)                                                                  api/jobs#update {:format=>:json}
#                           PUT    /api/jobs/:id(.:format)                                                                  api/jobs#update {:format=>:json}
#                           DELETE /api/jobs/:id(.:format)                                                                  api/jobs#destroy {:format=>:json}
#                 api_parts GET    /api/parts(.:format)                                                                     api/parts#index {:format=>:json}
#                           POST   /api/parts(.:format)                                                                     api/parts#create {:format=>:json}
#              new_api_part GET    /api/parts/new(.:format)                                                                 api/parts#new {:format=>:json}
#                  api_part GET    /api/parts/:id(.:format)                                                                 api/parts#show {:format=>:json}
#                           PATCH  /api/parts/:id(.:format)                                                                 api/parts#update {:format=>:json}
#                           PUT    /api/parts/:id(.:format)                                                                 api/parts#update {:format=>:json}
#                           DELETE /api/parts/:id(.:format)                                                                 api/parts#destroy {:format=>:json}
#              api_services GET    /api/services(.:format)                                                                  api/services#index {:format=>:json}
#                           POST   /api/services(.:format)                                                                  api/services#create {:format=>:json}
#           new_api_service GET    /api/services/new(.:format)                                                              api/services#new {:format=>:json}
#               api_service GET    /api/services/:id(.:format)                                                              api/services#show {:format=>:json}
#                           PATCH  /api/services/:id(.:format)                                                              api/services#update {:format=>:json}
#                           PUT    /api/services/:id(.:format)                                                              api/services#update {:format=>:json}
#                           DELETE /api/services/:id(.:format)                                                              api/services#destroy {:format=>:json}
#                 api_users GET    /api/users(.:format)                                                                     api/users#index {:format=>:json}
#                           POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#              new_api_user GET    /api/users/new(.:format)                                                                 api/users#new {:format=>:json}
#             edit_api_user GET    /api/users/:id/edit(.:format)                                                            api/users#edit {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           DELETE /api/users/:id(.:format)                                                                 api/users#destroy {:format=>:json}
#              api_sessions POST   /api/sessions(.:format)                                                                  api/sessions#create {:format=>:json}
#               api_session GET    /api/sessions/:id(.:format)                                                              api/sessions#show {:format=>:json}
#                           DELETE /api/sessions/:id(.:format)                                                              api/sessions#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users
  # resources :invoices
  namespace :api, defaults: {format: :json} do
    resources :cars, only: [:index, :show, :new, :create, :update, :destroy]
    resources :jobs, only: [:index, :show, :new, :create, :update, :destroy]
    resources :parts, only: [:index, :show, :new, :create, :update, :destroy]
    resources :services, only: [:index, :show, :new, :create, :update, :destroy]
    resources :services_offered, only: [:index]
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :contactus, only: [:create]
  end
  root "static_pages#root"
end
