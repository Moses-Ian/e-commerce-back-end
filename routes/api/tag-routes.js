const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
	Tag.findAll({
		include: [{
			model: Product,
			attributes: ['id', 'product_name', 'price', 'stock']
		}]
	}).then(data => res.json(data))
	.then(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
	Tag.findOne({
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
	}).then(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

router.post('/', (req, res) => {
  // create a new tag
	Tag.create(req.body)
	.then(data => res.status(200).json(data))
	.catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
