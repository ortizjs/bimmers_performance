# require_relative "../../models/Vehicle"
class Api::ClientsController < ApplicationController

    def new
        @client = Client.new
    end

    def index
        @clients = Client.where(:creator_id => current_user.id).includes(:cars)
        render :index
    end

    def show
        @client = Client.find(params[:id])
        render :show
    end

    def create
        @client = Client.new(client_params)
        @client.creator_id = current_user.id
        if @client.save
            create_car(@client, vehicle_params)
            render :show
        else
            render json: @client.errors.full_messages, status: 404
        end
    end

    def create_car(client, params)
        @car = Car.create(vehicle_params)
        @car.user_id = current_user.id
        @car.client_id = client.id
        @car.save!
    end

    def filtered_clients

        
        if params['client'] == ""
            @clients = []
        else
            @clients = Client.where("first_name like :s or last_name like :s or first_name || ' ' || last_name like :s", :s => "%#{params['client']}")
        end

        if @clients.length > 0
            render :filtered_clients
        else
            render json: ["No records found!"]
        end
    end

    private


    def client_params
        params.require(:client).permit(:email, :first_name, :last_name, :address, :cell_phone, :home_phone, :creator_id)
    end

    def vehicle_params
        params.require(:client).permit(:make, :model, :year, :registration, :vin, :last_service, :mileage, :client_id)
    end
end