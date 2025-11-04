import express from "express";
import cors from "cors";

// Create an instance of the Express application
const app = express();
// Set the port number for the server to listen on
const port = 4000;

// Use the express.json middleware to parse JSON request bodies
app.use(express.json());

// Use the CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Define a route handler for the root URL ("/")
app.get("/api/message", (req, res) => {
  res.json({
    message:
      "Full Stack Deployment course server is running successfully. Course chaicode: https://www.youtube.com/watch?v=vzVbqXVID-Y",
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
});
