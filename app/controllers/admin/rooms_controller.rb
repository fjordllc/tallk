# frozen_string_literal: true

class Admin::RoomsController < AdminController
  def index
    @rooms = Room.order(:created_at).page(params[:page])
  end

  def destroy
    @room = Room.find(params[:id])
    if @room.destroy
      redirect_to admin_rooms_path, notice: t('flash.rooms.destroy.success')
    else
      redirect_to admin_rooms_path, alert: t('flash.rooms.destroy.failure')
    end
  end
end
