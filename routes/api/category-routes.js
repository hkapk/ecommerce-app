const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  }).then((categoryData) => {
    res.json(categoryData);
  });
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {

    Category.findOne({
      where: {
        id :req.params.id
      },
      include: [
        {
        model: Product
        },
        ]
    }).then((productData) => {
      res.json(productData);
    });

  });


router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then((categoryData) => {
    res.json(categoryData);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then (categoryData => {
    res.json(categoryData);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then (categoryData =>
    res.json(categoryData)
  )
});

module.exports = router;