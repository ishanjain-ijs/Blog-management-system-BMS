const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const ROLES_LIST = require('../db/roles_list');
const verifyRoles = require('../middleware/verifyRoles');
const verifyJWT = require('../middleware/verifyJWT')
router.route('/')
    .get(postsController.getAllPosts)
    .post(verifyJWT,verifyRoles(ROLES_LIST.Admin), postsController.createNewPost)
    .put(verifyJWT,verifyRoles(ROLES_LIST.Admin), postsController.updatePost)
    .delete(verifyJWT,verifyRoles(ROLES_LIST.Admin), postsController.deletePost);

router.route('/:id')
    .get(postsController.getPost);

module.exports = router;