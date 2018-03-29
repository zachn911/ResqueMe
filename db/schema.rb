# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authorization_levels", id: false, force: :cascade do |t|
    t.bigint  "responder_id"
    t.bigint  "org_id"
    t.integer "authorization", limit: 2
  end

  create_table "responder_nodes", id: false, force: :cascade do |t|
    t.bigint  "responder_id"
    t.text    "sensor_id"
    t.integer "n_time"
    t.float   "lat"
    t.float   "long"
    t.integer "n_temp",       limit: 2
    t.integer "heartrate",    limit: 2
    t.integer "status",       limit: 2
  end

  create_table "responders", primary_key: "responder_id", id: :bigint, force: :cascade do |t|
    t.text "r_name"
    t.text "qualfications"
    t.text "medical_hist"
  end

  create_table "sensor_auths", primary_key: "sensor_id", id: :text, force: :cascade do |t|
    t.bigint "org_id"
    t.bigint "sensor_password"
    t.index ["sensor_id"], name: "sensor_auth_sensor_id_uindex", unique: true, using: :btree
  end

  create_table "sensor_lists", primary_key: "org_id", id: :bigint, force: :cascade do |t|
    t.text "sensor_id", null: false
    t.index ["org_id"], name: "sensor_list_org_key_uindex", unique: true, using: :btree
    t.index ["sensor_id"], name: "sensor_list_sensor_id_uindex", unique: true, using: :btree
  end

  create_table "user_auths", id: false, force: :cascade do |t|
    t.bigint "responder_id"
    t.text   "email"
    t.text   "p_hash"
    t.text   "salt"
    t.text   "local_hash"
  end

  create_table "vehicle_nodes", id: false, force: :cascade do |t|
    t.bigint  "vehicle_id"
    t.text    "sensor_id"
    t.integer "n_time"
    t.float   "lat"
    t.float   "long"
    t.integer "status",     limit: 2
  end

  create_table "vehicles", primary_key: "vehicle_id", id: :bigint, force: :cascade do |t|
    t.text "plate_num"
    t.text "v_type"
    t.text "make"
    t.text "model"
    t.text "color"
    t.text "equipment"
    t.index ["vehicle_id"], name: "vehicle_vehicle_id_uindex", unique: true, using: :btree
  end

  add_foreign_key "authorization_levels", "responders", primary_key: "responder_id", name: "authorization_level_responder_responder_id_fk"
  add_foreign_key "authorization_levels", "sensor_lists", column: "org_id", primary_key: "org_id", name: "authorization_level_sensor_list_org_id_fk"
  add_foreign_key "responder_nodes", "responders", primary_key: "responder_id", name: "responder_node_responder_responder_id_fk"
  add_foreign_key "responder_nodes", "sensor_auths", column: "sensor_id", primary_key: "sensor_id", name: "responder_node_sensor_auth_sensor_id_fk"
  add_foreign_key "sensor_auths", "sensor_lists", column: "org_id", primary_key: "org_id", name: "sensor_auth_sensor_list_org_id_fk"
  add_foreign_key "sensor_lists", "sensor_auths", column: "sensor_id", primary_key: "sensor_id", name: "sensor_list_sensor_auth_sensor_id_fk"
  add_foreign_key "user_auths", "responders", primary_key: "responder_id", name: "user_auth_responder_responder_id_fk"
  add_foreign_key "vehicle_nodes", "sensor_auths", column: "sensor_id", primary_key: "sensor_id", name: "vehicle_node_sensor_auth_sensor_id_fk"
  add_foreign_key "vehicle_nodes", "vehicles", primary_key: "vehicle_id", name: "vehicle_node_vehicle_vehicle_id_fk"
end
