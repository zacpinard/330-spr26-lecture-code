import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  charge: { type: String, required: true },
  userId: { type: String, required: true },
});

const Transaction = mongoose.model('transactions', transactionSchema);

export default Transaction;
