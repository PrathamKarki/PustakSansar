import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String, 
  firstName: String,
  lastName: String,
  password: String,

});


const User = mongoose.model('User', userSchema);

export default User;