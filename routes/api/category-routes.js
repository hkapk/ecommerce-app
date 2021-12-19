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
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;