const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51Iha4xGYuAsHh0X1N1zPjZ19OAmfvg5PTXkNJi6BGtF3JJuj6xzbWW65N0E6B3zLzopgiWqd0T0lYO6p8sx5qYCb00sjBGNuSH"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Your stripe data"));

app.post("/payments/create", async(request, response) => {
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

// Example endpoint
// http://localhost:5001/clone-cb77c/us-central1/api