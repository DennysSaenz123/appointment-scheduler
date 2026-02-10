import express from 'express'; // import express


// Create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 5000;

// Enable static file serving
app.use(express.static('public'));

//Allow express to read form data
app.use(express.urlencoded({ extended: true }));

// array to store submissions
const submissions = [];


// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/', (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/admin', (req,res) =>{
    res.send(submissions);

})

//POST route to handle form submission
app.post('/submissions', (req, res) =>{
    
    //JSON object to store submission data
    const submit = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        date: new Date(),
        time: req.body.time
    };
    //push the order object to the submissions array
    submissions.push(submit);
})

// Start the server and listen on the specified port 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
