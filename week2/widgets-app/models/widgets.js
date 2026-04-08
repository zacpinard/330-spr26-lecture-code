import mongoose from 'mongoose';

const partsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { strict: false },
);

const widgetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  parts: { type: [partsSchema] },
});

export default mongoose.model('widgets', widgetSchema);
