const express = require('express');
const lists_api_v1 = express.Router();

const dummy_data = [
  {
    id: 1, // <-- replace with uuids or similar (mongoDB ids?)
    user: "John Doe", // <-- replace with owner id (user management will come later)
    title: "List Entry",
    details: "Remember to do the thing that's important!",
    created: Date()
  },
  {
    id: 2,
    user: "Jane Smith",
    title: "Don't forget this!",
    details: "The answer to the universe is... 42.",
    created: Date()
  }
];

// TODO: define Lists API v1
lists_api_v1.get('/', (req, res) => {
  res.send('\'Ello Guv\'na');
});

lists_api_v1.get('/all', (req, res) => {
  res.json(dummy_data);
})

module.exports = lists_api_v1;
