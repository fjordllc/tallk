# frozen_string_literal: true

class Room < ApplicationRecord
  has_many :topics, dependent: :destroy
  validates :name, presence: true
  validates :password, presence: true, length: { minimum: 4 }, confirmation: true
  has_secure_password
end
