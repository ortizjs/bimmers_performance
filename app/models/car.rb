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
# Indexes
#
#  index_cars_on_client_id  (client_id) UNIQUE
#  index_cars_on_user_id    (user_id)
#
class Car < ApplicationRecord
    validates :make, :model, :registration, presence: true
    belongs_to :client
        # primary_key: :id,
        # foreign_key: :client_id,
        # class_name: 'Client'

    belongs_to :user
        # primary_key: :id,
        # foreign_key: :user_id,
        # class_name: 'User'
end
