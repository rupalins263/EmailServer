/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CORS = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};

/* harmony default export */ __webpack_exports__["a"] = (CORS);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nodemailer__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nodemailer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nodemailer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nodemailer_ses_transport__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nodemailer_ses_transport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nodemailer_ses_transport__);



var transporter = __WEBPACK_IMPORTED_MODULE_0_nodemailer___default.a.createTransport({
  service: 'gmail',
  auth: {
    user: 'zenopsysevolve@gmail.com',
    pass: 'ZenFeb2017.GE2017'
  }
});

/* harmony default export */ __webpack_exports__["a"] = (transporter);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var mysql = __webpack_require__(17);
var pool;

pool = mysql.createPool({
  host: "localhost",
  user: "ragadmin",
  password: "ragadmin123",
  database: "dbsoundarya",
  connectionLimit: 10,
  connectTimeout: 60 * 60 * 1000,
  aquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000
});

//dgadmin123

/* harmony default export */ __webpack_exports__["a"] = (pool);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Controller_CentralController__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util_CORS__ = __webpack_require__(0);




const SchoolRoute = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
SchoolRoute.post('/ContactUs', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_CentralController__["a" /* default */].contactUs);
SchoolRoute.get('/Events', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_CentralController__["a" /* default */].getEvents);
SchoolRoute.get('/UpcomingEvents', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_CentralController__["a" /* default */].getUpcomingEvents);
SchoolRoute.post('/Events', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_CentralController__["a" /* default */].createEvents);
SchoolRoute.delete('/Events/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_CentralController__["a" /* default */].deleteEvents);
SchoolRoute.get('/Albums', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_CentralController__["a" /* default */].getAlbums);
SchoolRoute.post('/Albums', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_CentralController__["a" /* default */].postAlbums);
SchoolRoute.post('/Photo', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_CentralController__["a" /* default */].postImage);
SchoolRoute.delete('/Albums/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_CentralController__["a" /* default */].removeAlbums);
SchoolRoute.get('/Image/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_CentralController__["a" /* default */].getImage);
SchoolRoute.delete('/Image/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_CentralController__["a" /* default */].deleteImage);
/* harmony default export */ __webpack_exports__["a"] = (SchoolRoute);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Controller_pucController__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util_CORS__ = __webpack_require__(0);




const SchoolRoute = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
SchoolRoute.post('/ContactUs', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_pucController__["a" /* default */].contactUs);
SchoolRoute.get('/Events', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_pucController__["a" /* default */].getEvents);
SchoolRoute.get('/UpcomingEvents', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_pucController__["a" /* default */].getUpcomingEvents);
SchoolRoute.post('/Events', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_pucController__["a" /* default */].createEvents);
SchoolRoute.delete('/Events/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_pucController__["a" /* default */].deleteEvents);
SchoolRoute.get('/Albums', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_pucController__["a" /* default */].getAlbums);
SchoolRoute.post('/Albums', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_pucController__["a" /* default */].postAlbums);
SchoolRoute.post('/Photo', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_pucController__["a" /* default */].postImage);
SchoolRoute.delete('/Albums/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_pucController__["a" /* default */].removeAlbums);
SchoolRoute.get('/Image/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_pucController__["a" /* default */].getImage);
SchoolRoute.delete('/Image/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_pucController__["a" /* default */].deleteImage);

/* harmony default export */ __webpack_exports__["a"] = (SchoolRoute);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Controller_SIMSController__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util_CORS__ = __webpack_require__(0);




const SchoolRoute = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
SchoolRoute.post('/ContactUs', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SIMSController__["a" /* default */].contactUs);
SchoolRoute.get('/Events', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SIMSController__["a" /* default */].getEvents);
SchoolRoute.get('/UpcomingEvents', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SIMSController__["a" /* default */].getUpcomingEvents);
SchoolRoute.post('/Events', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SIMSController__["a" /* default */].createEvents);
SchoolRoute.delete('/Events/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SIMSController__["a" /* default */].deleteEvents);
SchoolRoute.get('/Albums', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SIMSController__["a" /* default */].getAlbums);
SchoolRoute.post('/Albums', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SIMSController__["a" /* default */].postAlbums);
SchoolRoute.post('/Photo', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SIMSController__["a" /* default */].postImage);
SchoolRoute.delete('/Albums/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SIMSController__["a" /* default */].removeAlbums);
SchoolRoute.get('/Image/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SIMSController__["a" /* default */].getImage);
SchoolRoute.delete('/Image/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SIMSController__["a" /* default */].deleteImage);

/* harmony default export */ __webpack_exports__["a"] = (SchoolRoute);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Controller_SchoolController__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util_CORS__ = __webpack_require__(0);




const SchoolRoute = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
SchoolRoute.post('/ContactUs', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SchoolController__["a" /* default */].contactUs);
SchoolRoute.post('/Alumini', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SchoolController__["a" /* default */].alumini);
SchoolRoute.get('/Events', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SchoolController__["a" /* default */].getEvents);
SchoolRoute.get('/UpcomingEvents', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SchoolController__["a" /* default */].getUpcomingEvents);
SchoolRoute.post('/Events', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SchoolController__["a" /* default */].createEvents);
SchoolRoute.delete('/Events/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SchoolController__["a" /* default */].deleteEvents);
SchoolRoute.get('/Albums', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SchoolController__["a" /* default */].getAlbums);
SchoolRoute.post('/Albums', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SchoolController__["a" /* default */].postAlbums);
SchoolRoute.post('/Photo', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SchoolController__["a" /* default */].postImage);
SchoolRoute.delete('/Albums/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SchoolController__["a" /* default */].removeAlbums);
SchoolRoute.get('/Image/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SchoolController__["a" /* default */].getImage);
SchoolRoute.delete('/Image/:id', __WEBPACK_IMPORTED_MODULE_2__Util_CORS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Controller_SchoolController__["a" /* default */].deleteImage);
/* harmony default export */ __webpack_exports__["a"] = (SchoolRoute);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util_Mailer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util_db__ = __webpack_require__(3);


var CentralController = {};

CentralController.admission = (req, res) => {
   var mailOptions = {
      from: 'zenopsysevolve@gmail.com',
      to: 'soundaryacentralschool@gmail.com',
      cc: 'dananjayagokhale@gmail.com',
      bcc: 'zenopsysevolve@gmail.com',
      subject: 'Soundarya Central School contact us',
      html: `<p>Name : ${req.body.name}</p>
          <p>Sex : ${req.body.sex}</p>
          <p>email : ${req.body.email}</p>
          <p>phone : ${req.body.phone}</p>
          <p>Country : ${req.body.country}</p>
          <p>Coarse : ${req.body.course}</p>
          <p>Admission related query : ${req.body.query}</p>`
   };

   __WEBPACK_IMPORTED_MODULE_0__Util_Mailer__["a" /* default */].sendMail(mailOptions, (err, info) => {
      res.send("Email Sent");
   });
};

CentralController.contactUs = (req, res) => {
   var mailOptions = {
      from: 'zenopsysevolve@gmail.com',
      to: 'soundaryacentralschool@gmail.com',
      cc: 'dananjayagokhale@gmail.com',
      bcc: 'zenopsysevolve@gmail.com',
      subject: 'Soundarya Central School  Admission',
      html: `<p>Name : ${req.body.name}</p>
          <p>Contact Num : ${req.body.number}</p>
          <p>email : ${req.body.email}</p>
          <p>Message : ${req.body.message}</p>`
   };

   __WEBPACK_IMPORTED_MODULE_0__Util_Mailer__["a" /* default */].sendMail(mailOptions, (err, info) => {
      res.send("Email Sent");
   });
};
CentralController.getEvents = (req, res) => {
   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query('call p_get_event_central').then(function (rows) {

      //console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send("Error");
   });
};
CentralController.getUpcomingEvents = (req, res) => {

   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query('call p_get_upcoming_events_central').then(function (rows) {

      //console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send("Error");
   });
};
CentralController.createEvents = (req, res) => {

   console.log(req.body.name, req.body.date, req.body.eventUrl);
   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_create_event_central('${req.body.name}','${req.body.date}','${req.body.eventUrl}')`).then(function (rows) {

      //console.log(rows);
      res.status(200).send("Uploaded");
   }).catch(err => {
      res.status(404).send("Error");
   });
};
CentralController.getAlbums = (req, res) => {

   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_get_album_central`).then(function (rows) {

      //console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send("Error");
   });
};
CentralController.postAlbums = (req, res) => {

   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_create_album_central('${req.body.name}','${req.body.desc}')`).then(function (rows) {

      //console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send("Error");
   });
};
CentralController.postImage = (req, res) => {

   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_create_image_central(${req.body.id},'${req.body.url}')`).then(function (rows) {

      //console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send("Error");
   });
};

CentralController.removeAlbums = (req, res) => {

   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_remove_album_central(${req.params.id})`).then(function (rows) {

      //console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send("Unable to remove");
   });
};
CentralController.getImage = (req, res) => {

   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_get_image_central(${req.params.id})`).then(function (rows) {

      //console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send("Error");
   });
};

CentralController.deleteEvents = (req, res) => {
   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_remove_event_central(${req.params.id})`).then(function (rows) {

      console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send("Error");
   });
};
CentralController.deleteImage = (req, res) => {
   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_remove_image_central(${req.params.id})`).then(function (rows) {
      res.status(400).send("success");
   }).catch(err => {
      res.status(404).send("Error");
   });
};

/* harmony default export */ __webpack_exports__["a"] = (CentralController);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util_Mailer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util_db__ = __webpack_require__(3);


var pucController = {};

pucController.contactUs = (req, res) => {
  var mailOptions = {
    from: 'zenopsysevolve@gmail.com',
    to: 'degreesoundarya@gmail.com',
    cc: 'dananjayagokhale@gmail.com',
    bcc: 'zenopsysevolve@gmail.com',
    subject: 'Soundarya PU College  Contact',
    html: `<p>Name : ${req.body.name}</p>
          <p>Contact Num : ${req.body.number}</p>
          <p>email : ${req.body.email}</p>
          <p>Message : ${req.body.message}</p>`
  };

  __WEBPACK_IMPORTED_MODULE_0__Util_Mailer__["a" /* default */].sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(400).send("unable to contact");
    } else {
      res.status(200).send("Email Sent");
    }
  });
};

pucController.getEvents = (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query('call p_get_event_sims').then(function (rows) {

    //console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  });
};
pucController.getUpcomingEvents = (req, res) => {

  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query('call p_get_upcoming_events_sims').then(function (rows) {

    //console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  });
};
pucController.createEvents = (req, res) => {

  console.log(req.body.name, req.body.date, req.body.eventUrl);
  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_create_event_sims('${req.body.name}','${req.body.date}','${req.body.eventUrl}')`).then(function (rows) {

    //console.log(rows);
    res.status(200).send("Uploaded");
  }).catch(err => {
    res.status(404).send("Error");
  });
};
pucController.getAlbums = (req, res) => {

  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_get_album_sims`).then(function (rows) {

    //console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  });
};
pucController.postAlbums = (req, res) => {

  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_create_album_sims('${req.body.name}','${req.body.desc}')`).then(function (rows) {

    //console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  });
};
pucController.postImage = (req, res) => {

  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_create_image_sims(${req.body.id},'${req.body.url}')`).then(function (rows) {

    //console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  });
};

pucController.removeAlbums = (req, res) => {

  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_remove_album_sims(${req.params.id})`).then(function (rows) {

    //console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  }).catch(err => {
    res.status(404).send("Unable to remove");
  });
};
pucController.getImage = (req, res) => {

  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_get_image_sims(${req.params.id})`).then(function (rows) {

    //console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  });
};

pucController.deleteEvents = (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_remove_event_sims(${req.params.id})`).then(function (rows) {

    console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  }).catch(err => {
    res.status(404).send("Error");
  });
};
pucController.deleteImage = (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_remove_image_sims(${req.params.id})`).then(function (rows) {
    res.status(400).send("success");
  }).catch(err => {
    res.status(404).send("Error");
  });
};

/* harmony default export */ __webpack_exports__["a"] = (pucController);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util_Mailer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util_db__ = __webpack_require__(3);



var SchoolController = {};

SchoolController.contactUs = (req, res) => {
   var mailOptions = {
      from: 'zenopsysevolve@gmail.com',
      to: 'soundaryaschool@gmail.com',
      cc: 'dananjayagokhale@gmail.com',
      bcc: 'zenopsysevolve@gmail.com',
      subject: 'Soundarya School  Contact us',
      html: `<p>Name : ${req.body.name}</p>
          <p>Contact Num : ${req.body.number}</p>
          <p>email : ${req.body.email}</p>
          <p>Message : ${req.body.message}</p>`
   };

   __WEBPACK_IMPORTED_MODULE_0__Util_Mailer__["a" /* default */].sendMail(mailOptions, (err, info) => {
      res.send("Email Sent");
   });
};
SchoolController.alumini = (req, res) => {
   var mailOptions = {
      from: 'zenopsysevolve@gmail.com',
      to: 'soundaryaschool@gmail.com',
      cc: 'dananjayagokhale@gmail.com',
      bcc: 'zenopsysevolve@gmail.com',
      subject: 'Soundarya School  Alumini',
      html: `<p>Name : ${req.body.name}</p>
          <p>Contact Num : ${req.body.number}</p>
          <p>email : ${req.body.email}</p>
          <p>Message : ${req.body.message}</p>`
   };

   __WEBPACK_IMPORTED_MODULE_0__Util_Mailer__["a" /* default */].sendMail(mailOptions, (err, info) => {
      res.send("Email Sent");
   });
};

SchoolController.getEvents = (req, res) => {
   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query('call p_get_event_school').then(function (rows) {

      //console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send(err);
   });
};
SchoolController.getUpcomingEvents = (req, res) => {

   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query('call p_get_upcoming_events_school').then(function (rows) {

      //console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send(err);
   });
};
SchoolController.createEvents = (req, res) => {

   console.log(req.body.name, req.body.date, req.body.eventUrl);
   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_create_event_school('${req.body.name}','${req.body.date}','${req.body.eventUrl}')`).then(function (rows) {

      //console.log(rows);
      res.status(200).send("Uploaded");
   }).catch(err => {
      res.status(404).send(err);
   });
};
SchoolController.getAlbums = (req, res) => {

   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_get_album_school`).then(function (rows) {

      //console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send(err);
   });
};
SchoolController.postAlbums = (req, res) => {

   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_create_album_school('${req.body.name}','${req.body.desc}')`).then(function (rows) {

      //console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send(err);
   });
};
SchoolController.postImage = (req, res) => {

   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_create_image_school(${req.body.id},'${req.body.url}')`).then(function (rows) {

      //console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send(err);
   });
};

SchoolController.removeAlbums = (req, res) => {

   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_remove_album_school(${req.params.id})`).then(function (rows) {

      //console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send("Unable to remove");
   });
};
SchoolController.getImage = (req, res) => {

   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_get_image_school(${req.params.id})`).then(function (rows) {

      //console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send(err);
   });
};

SchoolController.deleteEvents = (req, res) => {
   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_remove_event_school(${req.params.id})`).then(function (rows) {

      console.log(rows);
      res.status(200).json({
         response: rows[0]
      });
   }).catch(err => {
      res.status(404).send(err);
   });
};
SchoolController.deleteImage = (req, res) => {
   __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_remove_image_school(${req.params.id})`).then(function (rows) {
      res.status(400).send("success");
   }).catch(err => {
      res.status(404).send(err);
   });
};

/* harmony default export */ __webpack_exports__["a"] = (SchoolController);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util_Mailer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util_db__ = __webpack_require__(3);


var pucController = {};

pucController.contactUs = (req, res) => {
  var mailOptions = {
    from: 'zenopsysevolve@gmail.com',
    to: 'soundaryapucollege@gmail.com',
    cc: 'dananjayagokhale@gmail.com',
    bcc: 'zenopsysevolve@gmail.com',
    subject: 'Soundarya PU College  Contact',
    html: `<p>Name : ${req.body.name}</p>
          <p>Contact Num : ${req.body.number}</p>
          <p>email : ${req.body.email}</p>
          <p>Message : ${req.body.message}</p>`
  };

  __WEBPACK_IMPORTED_MODULE_0__Util_Mailer__["a" /* default */].sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(400).send("unable to contact");
    } else {
      res.status(200).send("Email Sent");
    }
  });
};

pucController.getEvents = (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query('call p_get_event_puc').then(function (rows) {

    //console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  }).catch(err => {
    res.status(404).send("Error");
  });
};
pucController.getUpcomingEvents = (req, res) => {

  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query('call p_get_upcoming_events_puc').then(function (rows) {

    //console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  }).catch(err => {
    res.status(404).send("Error");
  });
};
pucController.createEvents = (req, res) => {

  console.log(req.body.name, req.body.date, req.body.eventUrl);
  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_create_event_puc('${req.body.name}','${req.body.date}','${req.body.eventUrl}')`).then(function (rows) {

    //console.log(rows);
    res.status(200).send("Uploaded");
  }).catch(err => {
    res.status(404).send("Error");
  });
};
pucController.getAlbums = (req, res) => {

  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_get_album_puc`).then(function (rows) {

    //console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  }).catch(err => {
    res.status(404).send("Error");
  });
};
pucController.postAlbums = (req, res) => {

  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_create_album_puc('${req.body.name}','${req.body.desc}')`).then(function (rows) {

    //console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  }).catch(err => {
    res.status(404).send("Error");
  });
};
pucController.postImage = (req, res) => {

  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_create_image_puc(${req.body.id},'${req.body.url}')`).then(function (rows) {

    //console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  }).catch(err => {
    res.status(404).send("Error");
  });
};

pucController.removeAlbums = (req, res) => {

  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_remove_album_puc(${req.params.id})`).then(function (rows) {

    //console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  }).catch(err => {
    res.status(404).send("Unable to remove");
  });
};
pucController.getImage = (req, res) => {

  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_get_image_puc(${req.params.id})`).then(function (rows) {

    //console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  }).catch(err => {
    res.status(404).send("Error");
  });
};

pucController.deleteEvents = (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_remove_event_puc(${req.params.id})`).then(function (rows) {

    console.log(rows);
    res.status(200).json({
      response: rows[0]
    });
  }).catch(err => {
    res.status(404).send("Error");
  });
};
pucController.deleteImage = (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__Util_db__["a" /* default */].query(`call p_remove_image_puc(${req.params.id})`).then(function (rows) {
    res.status(400).send("success");
  }).catch(err => {
    res.status(404).send("Error");
  });
};

/* harmony default export */ __webpack_exports__["a"] = (pucController);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util_CORS__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cors__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Routers_CentralRoute__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Routers_PucRoute__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Routers_SchoolRoute__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Routers_SIMSRoute__ = __webpack_require__(6);








//Intializing express app
const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({ extended: false }));
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_3_cors___default()());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__dirname + '/Views'));
app.use(`/Central`, __WEBPACK_IMPORTED_MODULE_4__Routers_CentralRoute__["a" /* default */]);
app.use(`/Puc`, __WEBPACK_IMPORTED_MODULE_5__Routers_PucRoute__["a" /* default */]);
app.use(`/School`, __WEBPACK_IMPORTED_MODULE_6__Routers_SchoolRoute__["a" /* default */]);
app.use(`/SIMS`, __WEBPACK_IMPORTED_MODULE_7__Routers_SIMSRoute__["a" /* default */]);
app.listen(process.env.PORT || 3333);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("nodemailer-ses-transport");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("promise-mysql");

/***/ })
/******/ ]);