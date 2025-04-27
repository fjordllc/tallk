# frozen_string_literal: true

# Fix for uninitialized constant ActiveSupport::LoggerThreadSafeLevel::Logger
require 'logger'

# Monkey patch to fix compatibility issue with Rails 6.1.7 and Ruby 3.2.8
ActiveSupport::LoggerThreadSafeLevel.class_eval do
  # Define Logger constant if it doesn't exist
  unless const_defined?(:Logger)
    const_set(:Logger, ::Logger)
  end
end
