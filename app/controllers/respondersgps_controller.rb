class RespondersgpsController < ApplicationController

  def rgps
    render template: "respondersgps/#{params[:rgps]}"
  end

  def index
      @respondernode = Respondernode.all
      @responder = Responder.all
      
  end

end