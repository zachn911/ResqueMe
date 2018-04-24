class OverviewmapController < ApplicationController

  def omap
    render template: "overviewmap/#{params[:omap]}"
  end
  def index
    @vehicle = Vehicle.all
    @vehiclenode = Vehiclenode.all

  end

  def live_update
    @respondernode = Respondernode.all
    @vehiclenode = Vehiclenode.all

    respond_to do |format|
      format.js
    end
  end

end