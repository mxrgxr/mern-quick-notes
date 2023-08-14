const Note = require('../../models/note');

module.exports = {
  create,
  fetchUserNotes,
};

async function create(req, res) {
  try {
    const note = new Note(req.body);
    note.user = req.user._id;
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: 'Error creating note' });
  }
}

async function fetchUserNotes(req, res) {
  try {
    const notes = await Note.find({ user: req.params.userId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching user notes' });
  }
}