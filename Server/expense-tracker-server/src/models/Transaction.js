import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    type: String,
});
export const Transaction = mongoose.model("transaction", TransactionSchema);
