class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :title
      t.text :description
      t.string :vehicle
      t.boolean :common, default: false
      t.decimal :cost
      t.decimal :time
      t.string :technician
      t.timestamps
    end
  end
end
