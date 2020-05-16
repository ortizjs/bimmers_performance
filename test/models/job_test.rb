# == Schema Information
#
# Table name: jobs
#
#  id          :bigint           not null, primary key
#  common      :boolean          default("false")
#  cost        :decimal(, )
#  description :text
#  technician  :string
#  time        :decimal(, )
#  title       :string
#  vehicle     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class JobTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
