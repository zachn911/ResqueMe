class Responder < ApplicationRecord
  self.primary_key = "responder_id"
  has_one :authorizationlevel
  has_many :respondernodes
  has_one :userauth


end