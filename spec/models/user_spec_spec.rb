require 'rails_helper'

RSpec.describe User, type: :model do
  # id | name |    email  | password_digest       
  describe 'Validations' do
    user = User.new(name: "Bob", email: "e@mail.com", password: "test1234", password_confirmation: "test1234")
    
    expect(user.password).to match(user.password_confirmation)
  end

  describe '.authenticate_with_credentials' do
    # examples for this class method here
  end

end