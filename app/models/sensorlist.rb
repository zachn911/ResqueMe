class SensorList< ApplicationRecord
  self.primary_key = "org_id"
  has_many :authorizationlevel
  has_many :sensorauth
  belongs_to :sensorauth
end