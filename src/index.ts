// remember to npm install @types/node for built in node modules
import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8',
});
