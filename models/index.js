// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Category has many Product models.
Category.hasMany(Product, {
	foreignKey: 'category_id'
});
Product.belongsTo(Category, {
	foreignKey: 'category_id'
});

// Product belongs to many Tag models. 
Product.belongsToMany(Tag, {
	through: ProductTag,
	foreignKey: 'product_id'
});

// Tag belongs to many Product models.
Tag.belongsToMany(Product, {
	through: ProductTag,
	foreignKey: 'tag_id'
});







// Using the ProductTag through model, allow products to have multiple tags and tags to have many products.


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
