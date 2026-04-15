import Transaction from '../models/transaction';

export const getAll = (userId, page, perPage) =>
  Transaction.find({ userId })
    .limit(perPage)
    .skip(perPage * page)
    .lean();

export const getById = (userId, transactionId) =>
  Transaction.findOne({
    _id: transactionId,
    userId,
  }).lean();

export const deleteById = (userId, transactionId) =>
  Transaction.deleteOne({
    _id: transactionId,
    userId,
  });

export const updateById = (userId, transactionId, newObj) =>
  Transaction.updateOne({ _id: transactionId, userId }, newObj);

export const create = (transactionData) => Transaction.create(transactionData);
