class Api::ClientsController < ApplicationController

    def new
        @client = Client.new
    end

    def index
        @clients = Client.all_clients
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
            render :show
        else
            render json: @client.errors.full_messages, status: 404
        end
    end

    private

    def client_params
        params.require(:client).permit(:email, :first_name, :last_name, :address, :cell_phone, :home_phone, :creator_id)
    end
end