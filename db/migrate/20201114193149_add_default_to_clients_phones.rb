class AddDefaultToClientsPhones < ActiveRecord::Migration[5.2]
  def change
    change_column_default :clients, :cell_phone, " "
    change_column_default :clients, :home_phone, " "
  end
end
