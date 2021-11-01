const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// index is default page which is searched
const staticpath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.set("view engine", "hbs");  // to use views hbs pages
app.set("views", template_path);
hbs.registerPartials(partials_path);
 
app.use(express.static(staticpath));  // looks for index.html page default


// app.get('/', (req, res) => {
//     res.send("home page");
// });

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/weather', (req, res) => {
    res.render("weather");
});

app.get('/*', (req, res) => {
    res.render("404error", { errormsg: 'Ooops !!page Could not be found' });
});

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});
