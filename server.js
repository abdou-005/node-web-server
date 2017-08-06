const  express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use((req, res, next)=>{
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    //console.log(log);
   // fs.appendFile('server.log', log+'\n');
    fs.appendFile('server.log', log+'\n', function (err) {
        if (err) throw err;
       // console.log('Saved log !');
    });
    next();
});
// app.use((req, res, next)=>{
//     res.render('maintenance.hbs');
// });
app.use(express.static(__dirname +'/public'));

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});


app.get('/', (req, res) => {
    res.status(404).send({
        error : 'Page not found.',
        name:'app v1'
    });
    // res.render('home.hbs', {
    //     pageTitle : 'Home Page',
    //     welcomeMessage: 'Welcome to my website',
    // });
});
app.get('/users', (req, res)=>{
    res.send([{
        name:'Mike',
        age: 27
    },{
        name : 'And',
        age: 25
    },{
        name: 'Jen',
        age: 26
    }])
});
app.get('/about', (req, res) =>{
    res.render('about.hbs', {
        pageTitle : 'About Page',
    });
});
app.get('/projects', (req, res) =>{
    res.render('projects.hbs', {
        pageTitle : 'Projects',
    });
});
app.get('/bad', (req, res)=>{
   res.send({
       errorMessage: 'Unable to handle request'
   }) ;
});
app.listen(port, ()=>{
    console.log(`server listen in PORT : ${port}` );
});
module.exports.app = app;