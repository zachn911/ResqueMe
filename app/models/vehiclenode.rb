class Vehiclenode < ApplicationRecord
  belongs_to :vehicle, :class_name => Vehicle, :foreign_key => "vehicle_id"
  delegate :vehicle_id, :to => :vehicle
  delegate :v_type, :to => :vehicle
  delegate :make, :to => :vehicle
  delegate :model, :to => :vehicle
  delegate :color, :to => :vehicle
  delegate :equipment, :to => :vehicle
  belongs_to :sensorauth
end