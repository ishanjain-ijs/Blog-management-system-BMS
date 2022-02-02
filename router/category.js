const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const ROLES_LIST = require('../db/roles_list');
const verifyRoles = require('../middleware/verifyRoles');
const verifyJWT = require('../middleware/verifyJWT')
router.route('/')
    .get(categoryController.getAllCategory)
    .post(verifyJWT,verifyRoles(ROLES_LIST.Admin), categoryController.createNewCat)

module.exports = router;