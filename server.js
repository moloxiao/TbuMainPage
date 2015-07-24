var port = 80;

var express = require('express');

var app = express();
app.use(require('body-parser')());
app.use(express.static('public'));
app.set('port', port);


app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.redirect('page-404.html');
});

app.listen(app.get('port'), function() {
    var nowDate = new Date();
    console.log(nowDate.toLocaleDateString() + ' ' + 
        nowDate.toLocaleTimeString() );
    console.log('express started ... ...');
});

