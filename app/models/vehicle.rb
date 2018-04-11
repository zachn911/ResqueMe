class Vehicle < ApplicationRecord
  self.primary_key = "vehicle_id"
  has_many :vehiclenode
end