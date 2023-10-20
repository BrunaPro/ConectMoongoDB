import Product from '../models/user.model.js'
	import extend from 'lodash/extend.js'
	import errorHandler from './error.controller.js'
	const create = async (req, res) => { 
const Product = new Product(req.body) 
try {
await Product.save()
return res.status(200).json({ 
message: "Successfully signed up!"
})
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
	const list = async (req, res) => { 
	try {
	let Product = await Product.find().select('name Description Price Quantity Categorie') 
	res.json(Product)
	} catch (err) {
	return res.status(400).json({
	error: errorHandler.getErrorMessage(err) 
	})
	} 
	}
	const ProductByID = async (req, res, next, id) => { 
try {
let Product = await Product.findById(id) 
if (!Product)
return res.status('400').json({ 
error: "Produt not found"
})
req.profile = Product
next()
} catch (err) {
return res.status('400').json({ 
error: "Could not retrieve user"
}) 
}
}
	const read = (req, res) => {
	req.profile.hashed_password = undefined 
	req.profile.salt = undefined
	return res.json(req.profile) 
	}

	const update = async (req, res) => { 
try {
let Product = req.profile
Product = extend(Product, req.body) 
user.updated = Date.now() 
await Product.save()
user.hashed_password = undefined 
user.salt = undefined
res.json(Product) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
	const remove = async (req, res) => { 
try {
let product = req.profile
let deletedProduct = await product.deleteOne() 
deletedProduct.hashed_password = undefined 
deletedProduct.salt = undefined
res.json(deletedProduct) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
	export default { create, ProductByID, read, list, remove, update }
