class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.integer :mileage
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :cars, :user_id, unique: true
  end
end
