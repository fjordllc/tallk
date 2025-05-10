# frozen_string_literal: true

require 'application_system_test_case'

class RoomsTest < ApplicationSystemTestCase
  test 'show room' do
    visit "/rooms/#{rooms(:room1).id}"

    assert_equal "「#{rooms(:room1).name}」の質問収集箱 | フィヨルドトーーク！", title
  end

  test 'create room' do
    visit '/rooms/new'
    within 'form[name=room]' do
      fill_in 'room[name]', with: 'テストのイベント'
      fill_in 'room[password]', with: 'testtest'
      click_button 'これで決定'
    end

    assert_text '質問収集箱完成！！'
  end

  test 'update room' do
    visit "/rooms/#{rooms(:room1).id}/edit"
    within 'form[name=room]' do
      fill_in 'room[name]', with: 'テストのイベント2'
      fill_in 'room[password]', with: 'testtesttest'
      click_button 'これで決定'
    end

    assert_text '質問収集箱更新完了！！'
  end
end
