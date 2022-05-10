import express from 'express';

const router = express.Router();
const fs = require('fs');

interface DataType {
  a?: string;
  b?: number;
  id?: string;
}

// reading and serving data from a local json file in '/src/data'
// directory has to be relative to index.ts which is calling this routes file
const dataFromJSON: DataType = JSON.parse(fs.readFileSync('./data/data.json'));

router.get('/', (_req, res) => {
  res.status(200).json(dataFromJSON);
});

module.exports = router;
