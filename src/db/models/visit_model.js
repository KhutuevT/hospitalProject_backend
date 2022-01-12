const { Schema, model } = require("mongoose");

const Visits = new Schema({
  patient_name: { type: String, required: true },
  doc_name: { type: String, required: true },
  date: { type: Date, required: true},
  complaints: { type: String, required: true },
});

module.exports = model('Visit', Visits);
