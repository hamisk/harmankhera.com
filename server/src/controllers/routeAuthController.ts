const fs = require('fs');

interface DataType {
  a?: string;
  b?: number;
  id?: string;
}

// reading and serving data from a local json file in '/src/data'
// directory has to be relative to index.ts which is calling this routes file
const dataFromJSON: DataType = JSON.parse(fs.readFileSync('./data/data.json'));

exports.getData = (_req, res) => {
  res.status(200).json(dataFromJSON);
};

exports.addData = (req, res) => {
  const newData = req.body;

  if (!newData) {
    return res.status(400).json({
      message: 'add-data requries data',
    });
  }

  // fs write to json file
};
