/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	API_MOREWASH_CONTACTTABLE_ARN
	API_MOREWASH_CONTACTTABLE_NAME
	API_MOREWASH_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var AWS = require("aws-sdk");
var contactEmail = require("./services/emailTemplates/contactEmail");
const config = {
  accessKeyId: process.env.ACCESS_KEY_ID_SES,
  secretAccessKey: process.env.SECRET_ACCESS_KEY_ID_SES,
  region: "ap-southeast-2",
  adminEmail: process.env.ADMIN_EMAIL,
};

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/**********************
 * Example get method *
 **********************/

app.post("/send", function async(req, res) {
  let { contactDetails } = req.body;
  console.log(contactDetails);
  var ses = new AWS.SES(config);
  var emailHTML = contactEmail(contactDetails);
  console.log(emailHTML);
  // Add your code here
  var params = {
    Destination: {
      ToAddresses: [contactDetails.email],
    },
    Message: {
      Subject: { Data: "Thanks for getting in touch with us" },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: emailHTML,
        },
      },
    },
    Source: `ShinyTruck Team <${config.adminEmail}>`,
  };

  ses.sendEmail(params, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: "Email Sent!", data });
  });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
