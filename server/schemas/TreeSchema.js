const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TreeSchema = new Schema({
  title: String,
  children: Array, //array of titles
  problems: Array,
});

module.exports = TreeSchema;
