const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const hbs = require('hbs');

app.use(express.urlencoded({ extended:true }));

// app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', (req,res) => {
    const username = 'john';
    const projects = [{
        name:'john',
        email:'john@gmail.com',
    },{
        name:'devid',
        email:'devid@gmail.com',
    }]
    //res.send('john');
    res.render('index', { username : username, projects: projects });
    // default views folder
})

app.listen(port, () => {
    console.log('app listen on ', port);
});