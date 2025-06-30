import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true 
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0 
    },
    category: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        default: '/images/placeholder.png' 
    },
    stock: {
        type: Number,
        required: true,
        min: 0, 
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    createdAt: { 
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', productSchema);
export default Product;