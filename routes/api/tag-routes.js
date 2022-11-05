const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product
        }
      ]
    })

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product
        }]
    });
    if (!tagData) {
      res.status(404).json({ message: 'No product with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tagName,
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
Tag.update(
    {
      tag_name: req.body.tagName
    },
    {
      where: {
        tag_id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', async (req, res) => {
  const tagData = await Tag.destroy({
    where: {
      tag_id: req.params.id,
    }
  }).catch((err) => res.json(err));
  res.json(tagData)
});

module.exports = router;
