class ActiverespondersController < ApplicationController

  def acr
    render template: "activeresponders/#{params[:acr]}"
  end
  def index
    @respondernode = Respondernode.all
  end


end
