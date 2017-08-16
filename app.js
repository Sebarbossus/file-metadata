var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));
//This way of serving static files is nicer and more common.

app.post('/upload', upload.single('file'), function(req, res, next){
   return res.json(req.file);
});





app.listen(3000 || process.env.PORT || process.env.argv, function(){
    console.log('Server is working');
});