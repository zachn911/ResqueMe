class ActiverespondersController < ApplicationController

  def acr
    render template: "activeresponders/#{params[:acr]}"
  end
  def index
    @respondernode = Respondernode.all
  end

  def live_table
    @respondernode = Respondernode.all

    respond_to do |format|
      format.js
    end
  end


end
