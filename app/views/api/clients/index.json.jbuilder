@clients.each do |client|
    json.set! client.id do 
        json.extract! client, :id, :first_name, :last_name, :email, :creator_id, :address, :cell_phone, :home_phone
        client.cars.each do |car|
            json.extract! car, :model, :make, :year, :mileage, :client_id, :registration, :vin, :last_service, :user_id
            json.car_id car.id
        end
    end

end