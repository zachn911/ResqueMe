class StatsController < ApplicationController

  def stat
    render template: "stats/#{params[:stat]}"
  end
  def index
  end


end