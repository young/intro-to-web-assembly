const express = require('express');
const app = express();

app.use(express.static('./'))

app.listen(8000, () => console.log('Server up on port 8000!'));
