json.extract! client, :id, :first_name, :last_name, :email, :address, :cell_phone, :home_phone, :creator_id
json.cars do
    client.cars.each_with_index do |car, index|
        json.set! index do
            json.extract! car, :id, :model, :make, :year, :mileage, :client_id, :registration, :vin, :last_service, :user_id
        end
    end
end
    

