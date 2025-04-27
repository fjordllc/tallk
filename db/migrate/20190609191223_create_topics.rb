# frozen_string_literal: true

class CreateTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :topics do |t|
      t.string :name, null: false
      t.string :who, null: false
      t.references :room, foreign_key: true

      t.timestamps
    end
  end
end
