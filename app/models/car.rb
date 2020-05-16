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
class Car < ApplicationRecord
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'
end
