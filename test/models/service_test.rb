# == Schema Information
#
# Table name: services
#
#  id          :bigint           not null, primary key
#  client_name :string
#  status      :string
#  technician  :string
#  total_cost  :decimal(, )
#  total_time  :decimal(, )
#  vehicle     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer          not null
#
# Indexes
#
#  index_services_on_user_id  (user_id) UNIQUE
#
require 'test_helper'

class ServiceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
