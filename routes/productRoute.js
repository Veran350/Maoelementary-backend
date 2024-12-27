const express = require('express');
const router = express.Router();

// Mock Products (replace with your database later)
const products = [
  { _id: '1', name: 'Product 1', description: 'Description 1', price: 10 },
  { _id: '2', name: 'Product 2', description: 'Description 2', price: 20 },
  { _id: '3', name: 'Product 3', description: 'Description 3', price: 30 },
];

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});

// Get product by ID
router.get('/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

module.exports = router;
