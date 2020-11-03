@clients.each do |client|
    json.set! client.id do 
        json.extract! client, :id, :first_name, :last_name, :email, :creator_id, :adress, :cell_phone, :home_phone
    end
end