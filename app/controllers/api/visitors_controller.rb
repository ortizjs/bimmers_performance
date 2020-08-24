class Api::VisitorsController < ApplicationController

    def new
        @visitor = Visitor.new
    end

    def create
        @visitor = Visitor.new(visitor_params)
        if @visitor.save
            VisitorMailer.contact_us_email(@visitor)
        else
            render json: @visitor.errors.full_messages, status: 422
        # flash.now[:errors] = @user.errors.full_messages
        # render :new
        end
    end

    # def visitor_mailer_send

    # end

    private

  def visitor_params
    params.require(:visitor).permit(:email, :first_name, :last_name)
  end
end