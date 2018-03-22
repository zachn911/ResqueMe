class SettingsoController < ApplicationController

  def so
    render template: "settingso/#{params[:so]}"
  end
  def index
  end


end