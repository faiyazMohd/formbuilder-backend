const mongoose = require("mongoose");
const { Schema } = mongoose;

const FormModel = new Schema({
  form: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("forms", FormModel);
