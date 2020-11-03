# == Schema Information
#
# Table name: cars
#
#  id           :bigint           not null, primary key
#  last_service :string
#  make         :string           not null
#  mileage      :integer
#  model        :string           not null
#  registration :string           not null
#  vin          :string
#  year         :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  client_id    :integer          not null
#  user_id      :integer          not null
#
# Indexes
#
#  index_cars_on_client_id  (client_id) UNIQUE
#  index_cars_on_user_id    (user_id)
#
require 'test_helper'

class CarTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
