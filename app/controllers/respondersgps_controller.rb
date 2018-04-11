class RespondersgpsController < ApplicationController

  def rgps
    render template: "respondersgps/#{params[:rgps]}"
  end

  def index
      @respondernode = Respondernode.all :include => [:r_name]
      @responder = Responder.all

      respond_to do |format|
        format.html
        format.json {render json: @respondernode}
      end
  end

end