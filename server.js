const express = require('express');
const apiRoutes = require('./routes/api')
const htmlRoutes = require('./routes/html')

// Declare the port
const PORT = process.env.PORT || 8000;
// Starts express
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', apiRoutes)
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});
