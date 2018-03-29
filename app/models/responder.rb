class Responder < ApplicationRecord
  self.primary_key = "responder_id"
  has_one :authorizationlevel
  has_one :respondernode
  has_one :userauth


end