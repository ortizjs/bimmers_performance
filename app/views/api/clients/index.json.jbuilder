@clients.each do |client|
    json.set! client.id do 
        json.extract! client, :id, :first_name, :last_name, :email, :creator_id, :adress, :cell_phone, :home_phone, :last_service, :make, :model, :year, :registration, :vin
    end
end