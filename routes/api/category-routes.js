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
			res.status(404).send();
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
	Category.create(req.body)
	.then(data => res.status(200).json(data))
	.catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
	Category.update(req.body, {
		where: {
			id: req.params.id
		}
	}).then(data => {
		if (!data) {
			res.status(404).send();
			return;
		}
		res.json(data);
	}).catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
			console.log("i'm there");
			console.log(data);
      if (!data) {
        res.status(404).send();
        return;
      }
      res.status(200).json(data);
			console.log("i'm here");
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;






































