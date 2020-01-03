import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

const PUBLIC_DIR = path.resolve(__dirname, '../../client/dist');

app.use(express.static(PUBLIC_DIR));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
