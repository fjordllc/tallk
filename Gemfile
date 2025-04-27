# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.2.8'

gem 'autoprefixer-rails'
gem 'bcrypt'
gem 'bootsnap', '1.13.0', require: false
gem 'dotenv-rails'
gem 'font-awesome-sass', '~> 5.8.1'
gem 'jbuilder', '~> 2.5'
gem 'kaminari'
# gem 'logger', '~> 1.7.0' # Removed to fix compatibility issue with Rails 6.1.7 and Ruby 3.2.8
gem 'meta-tags'
gem 'net-imap', require: false
gem 'net-pop', require: false
gem 'net-smtp', require: false
gem 'nio4r', '~> 2.5.9'
gem 'pg'
gem 'puma', '~> 5.0'
gem 'rails', '6.1.7'
gem 'sassc-rails'
gem 'sass-rails'
gem 'slim-rails'
gem 'turbolinks', '~> 5'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
gem 'webpacker'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  gem 'listen', '~> 3.3'
  gem 'rubocop-minitest'
  gem 'rubocop-performance'
  gem 'rubocop-rails'
  gem 'spring'
  gem 'web-console', '>= 4.1.0'
end

group :test do
  gem 'capybara', '>= 3.26'
  gem 'chromedriver-helper'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end
