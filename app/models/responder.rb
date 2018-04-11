class Responder < ApplicationRecord
  self.primary_key = "responder_id"
  has_many :authorizationlevel
  has_many :respondernodes
  has_many :userauth


end