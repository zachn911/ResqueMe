class RespondersgpsController < ApplicationController

  def rgps
    render template: "respondersgps/#{params[:rgps]}"
  end
  def index
  end


end