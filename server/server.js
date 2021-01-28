const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

//middlewares
const corsOptions = {
    origin: "http://localhost:8069"
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// const allRoutes = require('./routes');

// app.use('/', allRoutes);

require('./routes/auth')(app);
require('./routes/user')(app);

const port = process.env.PORT || 8069;

mongoose
    .connect(process.env.DB_HOST,{
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }).then(()=>{
        app.listen(port, ()=> console.log(`Server is running on ${port}`));
        require('./utils/initial_roles')();
    }).catch(err=> console.log(err));


