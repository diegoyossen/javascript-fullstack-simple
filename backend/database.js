const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/javascriptdb',{
    useNewUrlParser : true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));