class ContactUsController < ApplicationController

    def create
        @cotact = Contact.new(params[:contact][:data])
        name = params[:contact][:data][:name]
        @contact.request = request
        
        if @contact.deliver
            render json: {message: "Thank you for your Email #{name.capitalize}! 
            We really appreciate you getting in contact with us! We will get back to you as soon as we can!"}
        else
            render json: {message: "Error occured. Please try again!"}
        end
    end
end