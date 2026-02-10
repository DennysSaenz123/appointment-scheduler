import express from 'express'; // import express


// Create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 5000;

// Enable static file serving
app.use(express.static('public'));

//Allow express to read form data
app.use(express.urlencoded({ extended: true }));


// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/', (req, res) => {
  res.send("Hello world!");
});


// Start the server and listen on the specified port 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
