class OverviewmapController < ApplicationController

  def omap
    render template: "overviewmap/#{params[:omap]}"
  end
  def index
  end


end