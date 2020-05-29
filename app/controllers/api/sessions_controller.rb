class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
      # rederict_to user_url(@user)
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      # rederict_to new_session_url
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

  # def new
  #   # render :new
  #   render "api/session/new"
  # end

  # def show
  #   render "api/session/new"
  #   # render json: 'hello'
  # end
end