# frozen_string_literal: true

class TopicsController < ApplicationController
  before_action :set_room

  def index
    @topics = @room.topics.shuffle
  end

  def show
    @topic = @room.topics.sample
  end

  def new
    @topic = @room.topics.build
  end

  def create
    @topic = Topic.new(topic_params)
    @topic.room = @room

    if @topic.save
      redirect_to @room, notice: t('flash.topics.create')
    else
      render :new
    end
  end

  private

  def set_room
    @room = Room.find(params[:room_id])
  end

  def topic_params
    params.expect(topic: %i[name who])
  end
end
