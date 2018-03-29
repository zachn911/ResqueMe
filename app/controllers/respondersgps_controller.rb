class RespondersgpsController < ApplicationController

  def rgps
    render template: "respondersgps/#{params[:rgps]}"
  end

  def index
      @responder = Responder.all
  end

end