const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require('./routes/users');

// Middleware
app.use(express.urlencoded({ extended: true })); // Parses form data acess information from forms.
app.use(express.static('public')); // Serves form.html from public/

// Routes
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
