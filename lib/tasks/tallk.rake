# frozen_string_literal: true

namespace :tallk do
  namespace :oneshot do
    desc 'Set a password for an existing question box.'
    task set_password: :environment do
      Room.where(password_digest: nil).update_all(password_digest: BCrypt::Password.create('0000'))
    end
  end
end
