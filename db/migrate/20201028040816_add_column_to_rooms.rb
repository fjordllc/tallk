# frozen_string_literal: true

class AddColumnToRooms < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :password_digest, :string
  end
end
