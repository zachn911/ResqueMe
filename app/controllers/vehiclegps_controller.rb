class VehiclegpsController < ApplicationController

  def vgps
    render template: "vehiclegps/#{params[:vgps]}"
  end
  def index
  end


end