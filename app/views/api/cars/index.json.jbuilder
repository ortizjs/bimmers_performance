@cars.each do |car|
    json.set! car.id do 
        json.extract! car, :id, :last_service, :make, :model, :year, :registration, :vin, :client_id, :user_id, :mileage
    end
end