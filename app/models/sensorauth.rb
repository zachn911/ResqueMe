class SensorAuth < ApplicationRecord
  self.primary_key = "sensor_id"
  has_many :respondernode
  belongs_to :sensorlist
  has_many :sensorlist
  belongs_to :vehiclenode
end