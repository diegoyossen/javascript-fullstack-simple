const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/javascriptdb',{
    useNewUrlParser : true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));