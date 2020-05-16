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
class Job < ApplicationRecord
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id

end
