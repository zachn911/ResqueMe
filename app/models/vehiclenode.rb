class Vehiclenode < ApplicationRecord
  belongs_to :vehicle
  belongs_to :sensorauth
end