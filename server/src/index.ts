import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

const PUBLIC_DIR = path.resolve(__dirname, '../../client/dist');

app.use(express.static(PUBLIC_DIR));

// An api endpoint that returns a short list of items

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.resolve(PUBLIC_DIR, 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
