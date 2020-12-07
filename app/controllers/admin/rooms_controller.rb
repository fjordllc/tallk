# frozen_string_literal: true

class Admin::RoomsController < AdminController
  skip_before_action :basic_auth, only: :show
  before_action :set_room, only: :show
  before_action :question_box_auth, only: :show

  def index
    @rooms = Room.page(params[:page])
  end

  def show
    @topics = @room.topics.page(params[:page])
  end

  private

  def set_room
    @room = Room.find(params[:id])
  end

  def question_box_auth
    redirect_to room_path(@room), notice: '正しいパスワードを入力してください' unless @room.authenticate(params[:entered_password])
  end
end
