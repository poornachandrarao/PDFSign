import React from 'react';
import ReactDOM from 'react-dom';
var express = require('express');
import App from './App';
import UploadFile from './UploadFile';

const { parse } = require('querystring');
	const PDFDocument = require('pdfkit');
	const blobStream = require('blob-stream');
	const { Readable } = require('stream');
	const fs = require('fs');

	var app = express();
	 app.use(express.json({limit:'50mb'}));

	 
	app.use(
	  express.urlencoded({limit: '25mb'})
	)

	
	app.get('/eSignDocument', function (req, res) {
			  ReactDOM.render(
		  <React.StrictMode>
			 <UploadFile/>
		  </React.StrictMode>,
		  document.getElementById('root')
		);
	})

	// This responds a POST request for the homepage
	app.post('/eSignDocument', function (req, res) {
	   console.log("Got a POST request for the homepage");
		let filename = req.body.filename
		console.log("filename:"+filename);
		const FORM_URLENCODED = 'application/x-www-form-urlencoded';
		//if(req.headers['content-type'] === FORM_URLENCODED) {
			let body = '';
			req.on('data', chunk => {
				console.log("-------------->")
				body += chunk.toString();
			});
			req.on('end', () => {
				
			 
			});
		//res.send('Hello POST');


	})




	var server = app.listen(8081, function () {
	   var host = "127.0.0.1"
	   var port = server.address().port
	   
	   console.log("Example app listening at http://%s:%s", host, port)
	})
