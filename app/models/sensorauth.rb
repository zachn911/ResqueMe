class SensorAuth < ApplicationRecord
  self.primary_key = "sensor_id"
  has_one :respondernode
  belongs_to :sensorlist
  has_one :sensorlist
  belongs_to :vehiclenode
end