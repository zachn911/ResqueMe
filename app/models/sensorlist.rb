class SensorList< ApplicationRecord
  self.primary_key = "org_id"
  has_one :authorizationlevel
  has_one :sensorauth
  belongs_to :sensorauth
end