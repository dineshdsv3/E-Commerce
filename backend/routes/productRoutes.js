import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	})
);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		Product.findById(req.params.id, (err, data) => {
			if (err) {
				res.status(404).json({ message: 'Product Not found' });
			} else {
				res.send(data);
			}
		});
	})
);

export default router;