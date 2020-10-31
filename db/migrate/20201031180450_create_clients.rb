class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.integer :cell_phone
      t.integer :home_phone
      t.text :email
      t.text :adress
      t.integer :creator_id, null: false
      t.timestamps
    end
  end
end
