const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const enforce = require("express-sslify");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY);

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
	app.use(enforce.HTTPS({ trustProtoHeader: true }));
	app.use(express.static(path.join(__dirname, "client/build")));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.post("/payment", (req, res) => {
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: "usd",
	};

	stripe.charges.create(body, (StripeErr, stripeSuccess) => {
		if (StripeErr) {
			res.status(500).send({ error: StripeErr });
		} else {
			res.status(200).send({ success: stripeSuccess });
		}
	});
});

app.get("/service-worker.js", (req, res) => {
	res.sendFile(path.resolve(__dirname, "..", "build", "serviceWorker.js"));
});

app.listen(port, (error) => {
	if (error) throw error;
	console.log("server running on " + port);
});
