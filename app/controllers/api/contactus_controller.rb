class Api::ContactusController < ApplicationController

    def create
        @contact = Contact.new(params[:data])
        name = params[:data][:name]
        @contact.request = request
        
        if @contact.deliver
            render json: { message: "Thank you for your Email #{name.capitalize}! 
            We really appreciate you getting in contact with us! We will get back to you as soon as we can!" }
        else
            render json: { message: "An error occured. Please make sure to fill out the form correctly and try again!" }
        end
    end
    
end