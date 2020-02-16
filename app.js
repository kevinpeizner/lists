const express = require('express');
const path = require('path');

const app = express();

app.use('/lists/v1', require(path.join(__dirname, 'api', 'v1', 'lists_api_v1.js')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
