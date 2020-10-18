import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import errors from '../errors/error.js';

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
		const product = await Product.findById(req.params.id);
		if (product) {
			res.send(product);
		} else {
			res.status(404);
			throw new Error(errors.ProductError.ErrorDescription);
		}
	})
);

export default router;
