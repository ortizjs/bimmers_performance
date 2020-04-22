class User < ApplicationRecord
    validates :name, :email, :username, presence: true
    has_many :cars, :invoices, :jobs
end
