class  AuthorizationLevel < ApplicationRecord
  belongs_to :responder
  belongs_to :sensorlist
end