class Api::UsersController < ApplicationController
   def index 
    all_users = User.all
    render json: all_users
   end 

   def show
    # render json: 'Hello there... amor mio... tengo hambre y te quiero comer a ti ;)'
    render json: User.find(params[:id])
   end

   def create
    @user = User.new(user_params)

    if @user.save
    #   login(@user)
    #   render "api/users/show"\
        render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
    # render json: user
  end
  
  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: user
  end

  def update
    user = User.find(params[:id])
    if user.update_attributes(user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :name)
    # params.require(:user).permit(:username, :password)
  end
end