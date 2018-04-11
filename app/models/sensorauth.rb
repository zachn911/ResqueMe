class SensorAuth < ApplicationRecord
  self.primary_key = "sensor_id"
  has_many :respondernode
  has_many :sensorlist
  belongs_to :vehiclenode
end