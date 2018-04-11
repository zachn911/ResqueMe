class Respondernode < ApplicationRecord
  belongs_to :responder, :class_name => Responder, :foreign_key => "responder_id"
  delegate :r_name, :to => :responder
  belongs_to :sensorauth
end