# frozen_string_literal: true

class AdminController < ApplicationController
  before_action :basic_auth
  layout 'admin'

  private
  def basic_auth
    authenticate_or_request_with_http_basic do |username, password|
      ActiveSupport::SecurityUtils.secure_compare(username, ENV['ADMIN_USERNAME']) && ActiveSupport::SecurityUtils.secure_compare(password, ENV['ADMIN_PASSWORD'])
    end
  end
end
