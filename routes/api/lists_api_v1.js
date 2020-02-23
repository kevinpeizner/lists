const express = require('express');
const api = express.Router();

const dummy_data = [
  {
    id: 1, // <-- replace with uuids or similar (mongoDB ids?)
    user: "John Doe", // <-- replace with owner id (user management will come later)
    title: "List Entry",
    details: "Remember to do the thing that's important!",
    created: new Date()
  },
  {
    id: 2,
    user: "Jane Smith",
    title: "Don't forget this!",
    details: "The answer to the universe is... 42.",
    created: new Date()
  }
];

// TODO: define Lists API v1

// Create
api.post('/', (req, res) => {
  const lastId = dummy_data[dummy_data.length-1].id;
  const newEntry = {
    id: lastId !== undefined ? lastId+1 : 0,
    user: req.body.user,
    title: req.body.title,
    details: req.body.details,
    created: new Date()
  };
  console.log({newEntry});

  dummy_data.push(newEntry);
  res.json(newEntry);
});

// Read
api.get('/', (req, res) => {
  res.send('\'Ello Guv\'na');
});

api.get('/all', (req, res) => {
  res.json(dummy_data);
})

// Update
//api.put()

module.exports = api;
