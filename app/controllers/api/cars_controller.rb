class Api::CarsController < ApplicationController
    def create
        @car = Car.new(car_params)
        @car.client_id = current_user.id

        if @car.save
            @cars = Car.all.where(client_id: current_user.id).includes(:client)
            render 'api/cars/index'
        else
            render json: @client.errors.full_messages, status: 418
        end
    end

    def index 
        @cars = Car.all.where(client_id: current_user.id).includes(:client)
    end

    def update
    end

    def edit
    end

    def destroy
        @car = current_user.cars.find(params[:id])
        @car.destroy
        render :json @car.id
    end

    def show
        @car = Car.find(params[:id])
    end

    private
    def cars_params
        params.require(:car).permit(:make, :model, :year, :registration, :vin, :last_service, :mileage, :client_id)
    end
end
