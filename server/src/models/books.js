import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
    title : {type: String, required: true},
    author: String,
    description: String,
    price: Number,
    genre: String,
    image: String,
    stock: Number,


});


const Book = mongoose.model('Book', bookSchema);

export default Book;