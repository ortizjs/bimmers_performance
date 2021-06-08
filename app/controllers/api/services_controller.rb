class Api::ServicesController < ApplicationController

    # before_action :require_logged_in, only: [:create]

    def index
        services = query_params ? Service.in_query_params(query_params) : Service.all

        # if params[:minSeating] && params[:maxSeating]
        # services = services.where(seating: seating_range)
        # end

        # @services = services.includes(:reviews, :favorite_users)
        render :index
    end

    def new
        @service = Service.new
    end

    def show
        @service = Service.find(params[:id])
    end

    def create
        @service = Client.new(service_params)
        if @service.save
            render :show
            # render "api/services/show"
        else
            render json: @service.errors.full_messages, status :422
        # Service.create!(service_params)
        end
    end

    private

    def seating_range
        (params[:minSeating]..params[:maxSeating])
    end

    def service_params
        params.require(:service).permit(
        :lat,
        :lng,
        :description,
        :seating,
        :photo
        )
    end

    def query_params
        params[:query_params]
    end
end
