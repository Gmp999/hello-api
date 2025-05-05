const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Users list")
})

router.get("/new", (req, res) => {
    res.send("Users new form")
})

router.post('/', (req, res) => {
    const username = req.body.username;
    console.log('New user:', username);
    res.send(`User ${username} created!`);
  });
  

router.get("/:id", (req, res) => {
    res.send(`User with ID: ${req.params.id}`)
})

router.param("/:id1", (req, res, next, id) => {
    console.log(`User ID: ${id}`);
    next(); // Call the next middleware or route handler
});
module.exports = router;