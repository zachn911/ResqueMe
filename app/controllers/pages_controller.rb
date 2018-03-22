class PagesController < ApplicationController
  def page
    render template: "pages/#{params[:page]}"
  end

  def active_responders

  end

  def overview_map

  end

  def responder_gpsm

  end

  def vehicle_gps

  end
end
