import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import { connectDB } from './DB/index.js';
import { AuthRouters } from './Router/AuthRouters.js';

const app = express();
const PORT = process.env.PORT || 3050; // Use process.env.PORT if available

// Connect to the database
connectDB();

// Use bodyParser for parsing JSON
app.use(bodyParser.json());

// Set up CORS
const corsOptions = {
  origin: '*',
// some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Define routes
app.get('/', (req, res) => {
  res.json('Hello');
});

// Use the AuthRouters
app.use(AuthRouters);

// Create an HTTP server and listen to the specified port
const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
