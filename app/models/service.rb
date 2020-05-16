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
class Service < ApplicationRecord
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'
end
