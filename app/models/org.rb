class Org < ApplicationRecord
  self.primary_key = "org_id"
  has_many :authorizationlevel
  has_many :sensorlists

end