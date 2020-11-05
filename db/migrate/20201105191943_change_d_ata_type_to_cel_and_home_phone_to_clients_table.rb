class ChangeDAtaTypeToCelAndHomePhoneToClientsTable < ActiveRecord::Migration[5.2]
  def change
    change_column :clients, :cell_phone, :string
    change_column :clients, :home_phone, :string
  end
end
