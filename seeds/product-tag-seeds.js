const { ProductTag } = require('../models');

const productTagData = [
  {
    product_product_id: 1,
    tag_tag_id: 6,
  },
  {
    product_product_id: 1,
    tag_tag_id: 7,
  },
  {
    product_product_id: 1,
    tag_tag_id: 8,
  },
  {
    product_product_id: 2,
    tag_tag_id: 6,
  },
  {
    product_product_id: 3,
    tag_tag_id: 1,
  },
  {
    product_product_id: 3,
    tag_tag_id: 3,
  },
  {
    product_product_id: 3,
    tag_tag_id: 4,
  },
  {
    product_product_id: 3,
    tag_tag_id: 5,
  },
  {
    product_product_id: 4,
    tag_tag_id: 1,
  },
  {
    product_product_id: 4,
    tag_tag_id: 2,
  },
  {
    product_product_id: 4,
    tag_tag_id: 8,
  },
  {
    product_product_id: 5,
    tag_tag_id: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
