const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
	Category.findAll({
		include: [{
			model: Product,
			attributes: ['id', 'product_name', 'price', 'stock']
		}]
	}).then(data => res.json(data))
	.catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
	Category.findAll({
		where: {
			id: req.params.id
		},
		include: [{
			model: Product,
			attributes: ['id', 'product_name', 'price', 'stock']
		}]
	}).then(data => {
		if (!data) {
			res.status(404);
			return;
		}
		res.json(data);
	}).catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
