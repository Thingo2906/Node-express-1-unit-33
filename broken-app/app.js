const express = require('express');
const ExpressError = require('./expressError');
const axios = require('axios');
const app = express();

app.post('/', function(req, res, next) {
  try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch(err) {
    next(err);
  }
});
// add middleware to handle 404 error
app.use(function (req, res, next) {
  return new ExpressError("Not Found", 404);
});

// add middleware to handle general error
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
      error: err.message,
  });
});

app.listen(3000, function(){
  console.log("server is runing on port 3000");
});
