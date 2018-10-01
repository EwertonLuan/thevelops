import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import routes from './api';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

//link to connect with mongodb
mongoose.connect('mongodb://localhost:27017/thevelops-users', { useNewUrlParser: true });
routes(app);

app.listen(5000, () => console.log('Express server started...'));