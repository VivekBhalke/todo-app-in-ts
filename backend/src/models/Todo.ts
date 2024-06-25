import mongoose, { Schema, model } from 'mongoose';

// Define the User interface (optional, but recommended for type safety)


const todoSchema: Schema = new Schema({
    authorId : {
        type : mongoose.Schema.ObjectId,
        ref : 'User',
        required : true
    },
    title :{
        type : String,

    },
    description :{
        type : String,
    },
    done:{
        type : Boolean,
        default : false
    }
});



// Create the User model
const Todos = model('Todos', todoSchema);

export default Todos;
