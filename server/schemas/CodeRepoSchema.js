const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TreeSchema = new Schema({
  title: String,
  code: String,
  explanation: String,
});

module.exports = TreeSchema;
