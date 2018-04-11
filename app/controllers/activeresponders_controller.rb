class ActiverespondersController < ApplicationController

  def acr
    render template: "activeresponders/#{params[:acr]}"
  end
  def index
    @responder = Responder.joins(:respondernodes)
  end


end
