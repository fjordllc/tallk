# frozen_string_literal: true

Rails.application.routes.draw do
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  resources :rooms, only: %i[show new edit create update] do
    resources :topics, only: %i[index new show create]
  end

  namespace :admin do
    resources :rooms, only: %i[index destroy]
  end

  root 'top#index'
end
