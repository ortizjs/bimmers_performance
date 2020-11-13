# == Schema Information
#
# Table name: clients
#
#  id         :bigint           not null, primary key
#  address    :text
#  cell_phone :string
#  email      :text
#  first_name :string           not null
#  home_phone :string
#  last_name  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  creator_id :integer          not null
#
class Client < ApplicationRecord
    
    validates :first_name, :last_name, presence: true

    belongs_to :user,
    foreign_key: :creator_id,
    primary_key: :id,
    class_name: :User

    has_many :cars
    
end
