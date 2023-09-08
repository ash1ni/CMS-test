const express = require('express');
const router = express.Router();
const pagesController =require('../controllers/pagesController');

// Create a new page
router.post('/', pagesController.createPage);

// Get all pages
router.get('/', pagesController.getAllPages);

// Get a specific page by ID
router.get('/:id', pagesController.getPageById);

// Update a page by ID
router.put('/:id', pagesController.updatePageById);

// Delete a page by ID
router.delete('/:id', pagesController.deletePageById);

module.exports = router;
