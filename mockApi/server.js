import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import course from './routes/course';
import { choosePort } from 'react-dev-utils/WebpackDevServerUtils'

const Host = 'localhost'
const mockApiPort = 3000;
const app = express();

// Enable CORS
app.use(cors());

// Parse application/json
app.use(bodyParser.json());

app.use('/course', course);

// We attempt to use the default port but if it is busy, we offer the user to
// run on a different port. `detect()` Promise resolves to the next free port.
choosePort(Host,mockApiPort).then(port => {
  run(port)
})

function run(port) {
  app.listen(port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('==> 🌎 Mock API is running on port %s', port);
  })
}
