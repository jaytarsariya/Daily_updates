const express = require('express');

const routes = express.Router();

routes.get("/",(req,resp)=>{
  resp.render("index")
})



routes.get('/gallery', (req, resp) => {
  resp.send('hello welcome to the gallery');
});

module.exports = routes;
