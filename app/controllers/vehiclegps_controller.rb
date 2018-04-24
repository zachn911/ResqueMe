class VehiclegpsController < ApplicationController

  def vgps
    render template: "vehiclegps/#{params[:vgps]}"
  end
  def index
    @vehicle = Vehicle.all
    @vehiclenode = Vehiclenode.all
    @respondernode = Respondernode.all :include => [:r_name]
    @responder = Responder.all
  end

  def live_update
    @vehiclenode = Vehiclenode.all

    respond_to do |format|
      format.js
    end
  end

end