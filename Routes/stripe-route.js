const express = require("express");
const StripeRouter = express.Router();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

StripeRouter.post("/create-checkout-session", async (req, res) => {
  
  const book=req.body.book;
  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price_data: {
        currency: "inr",
        product_data: {
          name: book.title,
          id: book.id,
        },
        unit_amount: 200 * 100,
      },
      quantity: 1,
    }],

    mode: "payment",
    success_url: "https://book-hive-silk.vercel.app/#/user/paymentsuccess",
    cancel_url: "https://book-hive-silk.vercel.app/#/books",
    shipping_address_collection: {
      allowed_countries: ['IN','US'],
    },
    phone_number_collection: {
      "enabled": true,
    },
  });

  // res.json({id:session.id,
  // url:session.url});
  
  res.json({
    id:session.id,
    url:session.url
  })
});

module.exports = StripeRouter;