import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import course from './routes/course';

const mockApiPort = 3000;
const app = express();

// Enable CORS
app.use(cors());

// Parse application/json
app.use(bodyParser.json());

app.use('/course', course);

app.listen(mockApiPort, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('==> 🌎 Mock API is running on port %s', mockApiPort);
});
