#!/usr/bin/env ruby
# frozen_string_literal: true

require 'csv'
require 'yaml'

# Roomsの変換
puts "Converting rooms.csv to YAML..."
rooms = {}
room_id_map = {} # UUIDと新しいIDのマッピング

CSV.foreach('rooms.csv', headers: true).with_index(1) do |row, index|
  data = row.to_h
  uuid = data['id']
  room_id_map[uuid] = index

  rooms["room_#{index}"] = {
    'name' => data['name'],
    'password_digest' => data['password_digest'].to_s.empty? ? "<%= BCrypt::Password.create('testtest') %>" : data['password_digest']
  }
end

# YAMLファイルに書き出し
File.write('db/fixtures/rooms.yml', rooms.to_yaml)
puts "Created db/fixtures/rooms.yml with #{rooms.size} rooms"

# Topicsの変換
puts "Converting topics.csv to YAML..."
topics = {}

CSV.foreach('topics.csv', headers: true).with_index(1) do |row, index|
  data = row.to_h
  room_uuid = data['room_id']
  room_id = room_id_map[room_uuid]

  if room_id.nil?
    puts "Warning: Room ID #{room_uuid} not found for topic #{data['id']}"
    next
  end

  topics["topic_#{index}"] = {
    'name' => data['name'],
    'who' => data['who'],
    'room' => "room_#{room_id}"
  }
end

# YAMLファイルに書き出し
File.write('db/fixtures/topics.yml', topics.to_yaml)
puts "Created db/fixtures/topics.yml with #{topics.size} topics"

puts "Conversion completed!"
