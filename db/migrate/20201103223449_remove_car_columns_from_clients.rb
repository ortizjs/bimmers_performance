class RemoveCarColumnsFromClients < ActiveRecord::Migration[5.2]
  def change
    remove_column :clients, :last_service
    remove_column :clients, :make
    remove_column :clients, :model
    remove_column :clients, :registration
    remove_column :clients, :vin
    remove_column :clients, :year
  end
end
