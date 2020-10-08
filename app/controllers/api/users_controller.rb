class Api::UsersController < ApplicationController
  # before_action :require_current_user!, except: [:create, :new]

  
  def new
    @user = User.new
    # render "api/users/new"
  end
  
  def index 
    all_users = User.all
    return json: all_users
  end 

  def show
    @user = User.find(params[:id])
    # render json: User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
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
    # params.require(:user).permit(:username, :email, :first_name, :last_name, :password_digest, :session_token)
    params.require(:user).permit(:username, :email, :password, :first_name, :last_name)
  end
end