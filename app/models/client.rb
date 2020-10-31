# == Schema Information
#
# Table name: clients
#
#  id           :bigint           not null, primary key
#  adress       :text
#  cell_phone   :integer
#  email        :text
#  first_name   :string           not null
#  home_phone   :integer
#  last_name    :string           not null
#  last_service :string
#  make         :string           not null
#  model        :string           not null
#  registration :string
#  vin          :string
#  year         :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  creator_id   :integer          not null
#
# Indexes
#
#  index_clients_on_registration  (registration) UNIQUE
#
class Client < ApplicationRecord
    validates :first_name, :last_name, :make, :model, presence: true
    belongs_to :user,
    foreign_key: :creator_id,
    class_name: :User
end
