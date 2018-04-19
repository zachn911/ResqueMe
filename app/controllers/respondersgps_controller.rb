class RespondersgpsController < ApplicationController

  def rgps
    render template: "respondersgps/#{params[:rgps]}"

  end

  def index
      @respondernode = Respondernode.all :include => [:r_name]
      @responder = Responder.all
  end

end