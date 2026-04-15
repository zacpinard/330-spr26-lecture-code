import User from '../models/user';

export const getAll = (page, perPage) =>
  User.find()
    .limit(perPage)
    .skip(perPage * page)
    .lean();

export const getById = (userId) => User.findOne({ userId }).lean();

export const deleteById = (userId) => User.deleteOne({ userId });

export const updateById = (userId, newObj) =>
  User.updateOne({ userId }, newObj);

export const create = (userData) => User.create(userData);
