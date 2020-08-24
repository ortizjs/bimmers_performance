class AddEmailSubjectAndFieldToVisitors < ActiveRecord::Migration[5.2]
  def change
    add_column :visitors, :email_subject, :string
    add_column :visitors, :email_body, :text
  end
end
