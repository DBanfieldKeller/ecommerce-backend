const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({ include: [{ all: true, nested: true }]})

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
}});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id,{
      include: [
        {
          model: Product
        },
      ]});
    if (!categoryData) {
      res.status(404).json({ message: 'No product with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.categoryName,
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.categoryName
    },
    {
      where: {
        category_id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      category_id: req.params.id,
    }
  }).catch((err) => res.json(err));
  res.json(categoryData)
});

module.exports = router;
