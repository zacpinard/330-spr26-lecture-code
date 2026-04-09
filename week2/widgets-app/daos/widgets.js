import Widgets from '../models/widgets';

export const create = async (widget) => Widgets.insertOne(widget);

export const getById = async (id) => Widgets.findById(id);

export const getAll = async () => Widgets.find();

export const update = async (id, widget) => Widgets.updateOne({
  _id: id,
}, widget);

// export const updateAndReplace = async (id, widget) => {
//   const retrievedWidget = await Widgets.findById(id);
//   retrievedWidget.save();
// }

export const deleteById = async (id) => Widgets.deleteOne({_id: id});