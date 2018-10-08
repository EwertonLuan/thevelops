import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './api';
import config from './config'


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


/**link to connect with mongodb*/
mongoose.connect(config.MONGOOSE_KEY, { useNewUrlParser: true },(err) => {
    if(!err){
        console.log('Connection established to MongoDB.');
        
    } else {
        console.log('Not possible to established the connection to MongoDB.')
    }

});
routes(app);

app.listen(4000, () => console.log('Express server started...'));