import mongoose, { Schema, model } from 'mongoose';

// Define the User interface (optional, but recommended for type safety)


// _id: string;
//     name: string;
//     email: string;
//     password: string;
//     opt: number;
//     optExpiry: Date
// Define the User schema
const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  opt: {
    type: Number,
    },
    optExpiry: {
        type: Date,
        }
  
});



// Create the User model
const User = model('User', userSchema);

export default User;
