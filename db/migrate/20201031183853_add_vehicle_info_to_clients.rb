class AddVehicleInfoToClients < ActiveRecord::Migration[5.2]
  def change
    add_column :clients, :make, :string, null: false
    add_column :clients, :model, :string, null: false
    add_column :clients, :registration, :string
    add_column :clients, :year, :integer
    add_column :clients, :vin, :string
    add_column :clients, :last_service, :string
    change_column_null :clients, :first_name, false
    change_column_null :clients, :last_name, false
    add_index :clients, :registration, unique: true
  end
end
