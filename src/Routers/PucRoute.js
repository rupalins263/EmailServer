import express from 'express';
import SchoolController from '../Controller/pucController';

import CORS from '../Util/CORS';
const SchoolRoute=express.Router();
SchoolRoute.post('/ContactUs',CORS,SchoolController.contactUs);
SchoolRoute.get('/Events',CORS,SchoolController.getEvents);
SchoolRoute.get('/UpcomingEvents',CORS,SchoolController.getUpcomingEvents);
SchoolRoute.post('/Events',CORS,SchoolController.createEvents);
SchoolRoute.delete('/Events/:id',CORS,SchoolController.deleteEvents);
SchoolRoute.get('/Albums',CORS,SchoolController.getAlbums);
SchoolRoute.post('/Albums',CORS,SchoolController.postAlbums);
SchoolRoute.post('/Photo',CORS,SchoolController.postImage);
SchoolRoute.delete('/Albums/:id',CORS,SchoolController.removeAlbums);
SchoolRoute.get('/Image/:id',CORS,SchoolController.getImage);
SchoolRoute.delete('/Image/:id',CORS,SchoolController.deleteImage);

export default SchoolRoute;