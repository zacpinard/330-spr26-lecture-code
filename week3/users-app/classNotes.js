//warm up
import mongoose from 'mongoose';
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, require: true },
  categories: [String]
});
export default mongoose.model("items", itemSchema);

//Write queries to find:
// ● The top 10 most expensive items, ranked by price
db.items.find().sort({ price: 'desc', test: -1 }).limit(10)

// ● All items with a category of “food”
db.items.find({ categories: 'food' })

// ● Every item with at least 2 categories
db.items.find({ 'categories.1': {$exists: true}})
// ● Items whose name starts with “large”
db.items.find({name: /^large/}) //regex