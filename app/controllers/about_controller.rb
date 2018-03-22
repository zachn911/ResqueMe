class AboutController < ApplicationController

  def a
    render template: "about/#{params[:a]}"
  end
  def index

  end


end