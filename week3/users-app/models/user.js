import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  settings: {
    useDarkMode: Boolean,
    language: String,
  },
  contact: {
    email: String,
  },
});

const User = mongoose.model('users', userSchema);

export default User;
