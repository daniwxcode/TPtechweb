const express = require('express');

const app = express();

app.use(express.static('./dist/tpTechweb'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/tpTechweb/'}),
);

app.listen(process.env.PORT || 8080);
