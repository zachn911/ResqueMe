# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
responder = responders.create([{ r_name: 'Jacob Brockenheimer' }, {r_name: 'Alex Davinci'},
  {r_name: 'Leonardo Gaul'}])
respondernode = respondernodes.create([{responder_id: '123456'}, responder_id: '871539'},
  {responder_id: 369016}])
sensor_id.create(sensor_id: 'TXDN6195', responder_id: respondernode.first)
n_time.create(n_time: 191417, responder_id: respondernode.first)
n_temp.create(n_temp: 96, responder_id: respondernode.first)
n_heartrate.create(heartrate: 60, responder_id: respondernode.first)
lat.create(lat: 33.2374, responder_id: respondernode.first)
long.create(long: -97.1475, responder_id: respondernode.first)

sensor_id.create(sensor_id: 'TXDN7186', responder_id: respondernode.second)
n_time.create(n_time: 191416, responder_id: respondernode.first)
n_temp.create(n_temp: 84, responder_id: respondernode.first)
n_heartrate.create(heartrate: 80, responder_id: respondernode.first)
lat.create(lat: 33.2178, responder_id: respondernode.first)
long.create(long: -97.1544, responder_id: respondernode.first)

sensor_id.create(sensor_id: 'TXDN2373', responder_id: respondernode.third)
n_time.create(n_time: 191420, responder_id: respondernode.first)
n_temp.create(n_temp: 110, responder_id: respondernode.first)
n_heartrate.create(heartrate: 114, responder_id: respondernode.first)
lat.create(lat: 33.2296, responder_id: respondernode.first)
long.create(long: -97.1142, responder_id: respondernode.first)


