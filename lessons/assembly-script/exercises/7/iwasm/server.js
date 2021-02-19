const express = require('express');
const app = express();

app.use(express.static('./'))

app.listen(3000, () => console.log('Server up on port 3000!'));
