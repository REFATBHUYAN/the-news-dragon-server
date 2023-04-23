const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const catagories = require('./data/catagories.json');
const news = require( './data/news.json' );

app.use(cors());

app.get('/', (req,res) =>{
    res.send('dragon news is running from sever')
})

app.get('/categories', (req,res) =>{
    res.send(catagories);
})

app.get( '/categories/:id', ( req, res ) => {
    const id = req.params.id;
    if ( id == 0 ) {
        res.send( news );
    }
    else {
        const categoryNews = news.filter( n => n.category_id == id );
        res.send( categoryNews );
    }
} )

app.get( '/news', ( req, res ) => {
    res.send( news );
} )

app.get( '/news/:id', ( req, res ) => {
    const id = req.params.id;
    console.log( id );
    const selectedNews = news.find( n => n._id === id );
    res.send( selectedNews );
} )

app.listen(port, () =>{
    console.log(`Dragon API is running on port: ${port}`);
})