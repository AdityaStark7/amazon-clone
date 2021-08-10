const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JMs9sSGt1OFG5HyxQ2Ey6xkqXGWW1CpgFJg6Usgx3BjY95Ntwh07UAuBuRRJ3Q9o4taUwYeLhYxWDMba4Yde2ni00g05f0yXu');


// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  



// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-f6f7d/us-central1/api
