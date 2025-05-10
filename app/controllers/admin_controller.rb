# frozen_string_literal: true

class AdminController < ApplicationController
  before_action :basic_auth
  layout 'admin'

  USERNAME = 'admin'

  private

  def basic_auth
    authenticate_or_request_with_http_basic do |username, password|
      ActiveSupport::SecurityUtils.secure_compare(username, USERNAME) &&
        ActiveSupport::SecurityUtils.secure_compare(password, Rails.application.credentials.admin.password)
    end
  end
end
