# frozen_string_literal: true

class Admin::RoomsController < AdminController
  def index
    @rooms = Room.page(params[:page])
  end
end
