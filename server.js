const express = require('express')
const app = express();
const hbs = require('hbs');
require('./config/hbs-helpers');

app.use(express.static(__dirname + `/public`));

// Express HBS engine
hbs.registerPartials(__dirname + `/views/partials`);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render(`home`, { name: `ing. Charles rodRiguez`, title: `ProSoftware C.A`, });

});

app.get('/about', (req, res) => {

    res.render(`about`, { title: `About`, name: 'ing. charles rodriguez' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening in port ${port}`);
    console.log(`Dir: ${__dirname}`);
});
