const router = require("express").Router();
const Category = require("../model/categorySchema");

const createNewCat = async (req, res) => {
    if(!req?.body?.name){
        return res.status(400).json({'message': 'Category name is required'});
    }
    try {
        const savedCat = await Category.create({
            name: req.body.name
        });
        res.status(201).json(savedCat);
      } catch (err) {
        console.error(err)
      }
}
const getAllCategory = async ( req, res) => {
    const categories = await Category.find();
    if (!categories) return res.status(204).json({ 'message': 'No category found'})
    res.json(categories);
}


module.exports = {
    createNewCat,
    getAllCategory
}