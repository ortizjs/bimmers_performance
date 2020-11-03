class UpdateColumnsAndAddOtherInfoToCars < ActiveRecord::Migration[5.2]
  def change
    rename_column :cars, :user_id, :client_id
    add_column :cars, :registration, :string, null: false
    add_column :cars, :vin, :string
    add_column :cars, :last_service, :string
    change_column_null :cars, :make, false
    change_column_null :cars, :model, false
  end
end
