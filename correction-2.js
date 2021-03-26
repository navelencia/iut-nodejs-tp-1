const fs = require('fs').promises;
const path = require('path');
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/file/:name', async (req, res) => {
    const filePath = path.join(__dirname, 'files', req.params.name);
    try {
        await fs.access(filePath);
        res.status(200).sendFile(filePath);
    } catch (e) {
        res.status(404).send('Error 404 File Not Found.')
    }
});

app.listen(port, () => {
    console.log(`File lookup app listening at http://localhost:${port}`);
});