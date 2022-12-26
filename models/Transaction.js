const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please name your transaction..."],
  },
  amount: {
    type: Number,
    required: [true, "Please enter a negative or positive amount..."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transactions", TransactionSchema);
