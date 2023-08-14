const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/notes (add a new note)
router.post('/', ensureLoggedIn, notesCtrl.create);

// GET /api/notes/user/:userId (fetch notes for the logged-in user)
router.get('/user/:userId', ensureLoggedIn, notesCtrl.fetchUserNotes);

module.exports = router;