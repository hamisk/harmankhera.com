import express from 'express';
const app = express();

interface Params {
  a: number;
  b?: number;
}

type Add = (x: Params) => number;

const add: Add = (x) => {
  return x.a + x.b!;
};

app.get('/', (req) => {
  (req as any).name = 'shoeface';
});
