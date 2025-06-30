import { Router } from "express";
import Product from "../models/products.js";
const productRouter = Router();

productRouter.post('/add', async (req, res) => {
    const existingProduct = await Product.findOne({ name: req.body.name });
    if (existingProduct) {
        return res.send('Product already exists!!');
    } else {
        await Product.create(req.body);
        return res.send('Product added successfully!!');
    }
});


productRouter.get('/', async (req, res) => {
  try {
    const products = await Product.find().limit(6); 
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

productRouter.get('/featured', async (req, res) => {
  try {
    const featuredProducts = await Product.find({ isFeatured: true }).limit(6);
    res.json(featuredProducts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch featured products" });
  }
});

export default productRouter;