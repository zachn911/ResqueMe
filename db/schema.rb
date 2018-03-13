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

  create_table "responder", primary_key: "responder_id", id: :bigint, force: :cascade do |t|
    t.text "r_name"
    t.text "qualfications"
    t.text "medical_hist"
  end

  create_table "sensor_auth", primary_key: "sensor_id", id: :text, force: :cascade do |t|
    t.bigint "org_id"
    t.bigint "sensor_password"
    t.index ["sensor_id"], name: "sensor_auth_sensor_id_uindex", unique: true, using: :btree
  end

  create_table "sensor_list", primary_key: "org_id", id: :bigint, force: :cascade do |t|
    t.text "sensor_id", null: false
    t.index ["org_id"], name: "sensor_list_org_key_uindex", unique: true, using: :btree
    t.index ["sensor_id"], name: "sensor_list_sensor_id_uindex", unique: true, using: :btree
  end

  create_table "vehicle", primary_key: "vehicle_id", id: :bigint, force: :cascade do |t|
    t.text "plate_num"
    t.text "v_type"
    t.text "make"
    t.text "model"
    t.text "color"
    t.text "equipment"
    t.index ["vehicle_id"], name: "vehicle_vehicle_id_uindex", unique: true, using: :btree
  end

  add_foreign_key "sensor_auth", "sensor_list", column: "org_id", primary_key: "org_id", name: "sensor_auth_sensor_list_org_id_fk"
  add_foreign_key "sensor_list", "sensor_auth", column: "sensor_id", primary_key: "sensor_id", name: "sensor_list_sensor_auth_sensor_id_fk"
end
