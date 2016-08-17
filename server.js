/**
 * Created by Ant on 8/16/16.
 */
var express = require('express');

var path = require('path');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render index page in views folder
app.get('/', function (req, res) {
    res.render('index');
})

app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);
    // code to collect users input and go to results page
    var users = {
        name: req.body.name,
        location: req.body.location,
        language: req.body.language,
        comment: req.body.comment
    };

    res.render('results', {users: users});
});


app.listen(8000, function () {
    console.log("listening on port 8000");
});