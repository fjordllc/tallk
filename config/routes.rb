# frozen_string_literal: true

Rails.application.routes.draw do
  resources :rooms, only: %i[show new edit create update] do
    resources :topics, only: %i[index new show create]
  end

  namespace :admin do
    resources :rooms, only: %i[index show]
  end

  root 'top#index'
end
