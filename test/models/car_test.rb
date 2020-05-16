# == Schema Information
#
# Table name: cars
#
#  id         :bigint           not null, primary key
#  make       :string
#  mileage    :integer
#  model      :string
#  year       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_cars_on_user_id  (user_id) UNIQUE
#
require 'test_helper'

class CarTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
