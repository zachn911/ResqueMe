class VehiclegpsController < ApplicationController

  def vgps
    render template: "vehiclegps/#{params[:vgps]}"
  end
  def index
    @vehicle = Vehicle.all
  end


end