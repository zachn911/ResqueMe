class DashboardController < ApplicationController

  def dash
    render template: "dashboard/#{params[:dash]}"
  end
  def index
  end


end