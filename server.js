
/////DEPENDENCIES
var express = require('express');
var app = express();

//PORT
var PORT = process.env.PORT || 8080;

//MIDDELWEAR
//MIDDLEWARE
//urlendoced
//express.json
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Requiring routes:
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//Start Server
app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});