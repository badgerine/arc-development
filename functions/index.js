const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
// const fs = require("fs"); 

const clientEnquiryResponseTemplate = require("./emailTemplateEnquiry.html");
const clientEstimateResponseTemplate = require("./emailTemplateEstimate.html");

const config = functions.config();
admin.initializeApp();

const transporter = nodemailer.createTransport(
  {
    service: 'Gmail',
    auth: {
      user: config.user.email,
      pass: config.user.password
    },
  });

let mailOptions = {
  from: 'MaterialUI Course',
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { name, email, phone, message, total, service, platforms, features,
      customFeatures, users, category } = request.query;
    if (total) {
      //website estimate
      if (category) {
        mailOptions = {
          ...mailOptions,
          to: config.user.email,
          subject: 'Estimate received',
          html: `
            <p style='font-size:16px'>From: ${name}</p>
            <p style='font-size:16px'>Email: ${email}</p>
            <p style='font-size:16px'>Phone Number: ${phone}</p>
            <p style='font-size:16px'>Message: ${message}</p>
            <p style='font-size:16px'>Total: ${total}</p>
            <p style='font-size:16px'>Service: ${service}</p>
            <p style='font-size:16px'>Category: ${category}</p>
            `
        };
      }
      //Custom Software or iOS/Android estimate
      else {
        mailOptions = {
          ...mailOptions,
          to: config.user.email,
          subject: 'Estimate received',
          html: `
            <p style='font-size:16px'>From: ${name}</p>
            <p style='font-size:16px'>Email: ${email}</p>
            <p style='font-size:16px'>Phone Number: ${phone}</p>
            <p style='font-size:16px'>Message: ${message}</p>
            <p style='font-size:16px'>Total: ${total}</p>
            <p style='font-size:16px'>Service: ${service}</p>
            <p style='font-size:16px'>Platforms: ${platforms}</p>
            <p style='font-size:16px'>Features: ${features}</p>
            <p style='font-size:16px'>Custom Features: ${customFeatures}</p>
            <p style='font-size:16px'>Users: ${users}</p>
            `
        };
      }

      transporter.sendMail(mailOptions, error => {
        if (error) {
          response.send(error)
        } else {
          response.send('Estimate sent successfully.')
        }
      });

      mailOptions = {
        ...mailOptions,
        to: email,
        subject: 'We have received your message!',
        html: clientEstimateResponseTemplate
      }
      transporter.sendMail(mailOptions);

    } else {
      mailOptions = {
        ...mailOptions,
        to: config.user.email,
        subject: 'Message received',
        html: `
          <p style='font-size:16px'>From: ${name}</p>
          <p style='font-size:16px'>Email: ${email}</p>
          <p style='font-size:16px'>Phone Number: ${phone}</p>
          <p style='font-size:16px'>Message: ${message}</p>
          `
      }
      transporter.sendMail(mailOptions, error => {
        if (error) {
          response.send(error)
        } else {
          response.send('Message sent successfully.')
        }
      });

      mailOptions = {
        ...mailOptions,
        to: email,
        subject: 'We have received your message!',
        html: clientEnquiryResponseTemplate
      }
      transporter.sendMail(mailOptions);
    }

  })
});
