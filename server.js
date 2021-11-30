const express = require('express');
const apiRoutes = require('./routes/api')
const htmlRoutes = require('./routes/html')

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

