class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.string :client_name
      t.string :vehicle
      t.decimal :total_cost
      t.decimal :total_time
      t.string :technician
      t.string :status
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :services, :user_id, unique: true
  end
end
