import express from 'express';
import bodyParser from 'body-parser';
import CORS from './Util/CORS';
import cors from 'cors';
import CentralRoute from './Routers/CentralRoute';
import PucRoute from './Routers/PucRoute';
import SchoolRoute from './Routers/SchoolRoute';
import SIMSRoute from './Routers/SIMSRoute';
//Intializing express app
const app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/Views'));
app.use(`/Central`,CentralRoute);
app.use(`/Puc`,PucRoute);
app.use(`/School`,SchoolRoute);
app.use(`/SIMS`,SIMSRoute);
app.listen(process.env.PORT || 3333);