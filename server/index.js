const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-auth').Strategy
const app = express();

/*app.get('/', (req, res) => {
    res.send({hi: 'Hello world'});
})*/

passport.use(new GoogleStrategy())

const PORT = process.env.PORT || 3000;

app.listen(PORT)