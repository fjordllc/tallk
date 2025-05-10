# frozen_string_literal: true

namespace :tallk do
  namespace :oneshot do
    desc 'Set a password for an existing question box.'
    task set_password: :environment do
      Room.where(password_digest: nil).find_each do |room|
        room.password = '0000'
        room.save(validate: false) # Skip validations for this batch operation but use proper model methods
      end
    end
  end
end
