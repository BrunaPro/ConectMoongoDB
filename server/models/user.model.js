import mongoose from 'mongoose'
//const mongoose = require('mongoose');
//const UserSchema = new mongoose.Schema({
  const ProductSchema = new mongoose.Schema({
 name: {
 type: String,
 trim: true,
/* required: 'Name is required'*/
 },
 description: {
  type: String,
 /* required: 'Description is required'*/
 },
 price: 
 {
  type: String,
 /*required: 'Price is required'*/
 },
 quantity:
 {
  type: String,
  /*required: 'Quantity is required'*/
 },
 categorie:
 {
  type: String,
  /*required: 'Category is required'*/
 }
 }, null);
//module.exports = mongoose.model('Product', ProductSchema);
export default mongoose.model('Product', ProductSchema);