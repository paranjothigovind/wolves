const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const users = require("./routes/api/users");
const tutor = require("./routes/tutor");
const path = require("path");
const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({});
//calendar
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const app = express();

// //fileupload
// const fileRoute = require('./routes/file');
// app.use(express.static(path.join(__dirname, '..', 'build')));
// app.use(fileRoute);


//razorpay
const shortid = require('shortid')
const Razorpay = require('razorpay')

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: '50mb'
  })
);
app.use(bodyParser.json({limit: '50mb'}));

app.use(cors(corsOptions));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
// app.use(cors(corsOptions));

var corsOptions = {
  origin: "https://virtual-tutoring.herokuapp.com" || "https://virtualts-vts.herokuapp.com"
};

//razor pay
const razorpay = new Razorpay({
	key_id: 'rzp_test_uGoq5ABJztRAhk',
	key_secret: 'FySe2f5fie9hij1a5s6clk9B'
})

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  app.get('/', (req, res) => {
   // proxy.web(req, res, { target: 'https://virtual-tutoring.herokuapp.com/Student/home' });
   // proxy.web(req, res, { target: 'http://localhost:5000' });
  //  proxy.web(req, res, { target: 'https://vts-1.herokuapp.com' });
  res.redirect('/dashboard')

  });

  // //razor pay
  // app.get('/', (req, res) => {
  //   res.sendFile(path.join(__dirname, 'logo.svg'))
  // })
  

const client = require('twilio')('AC80f7dbb1b16cd5b4e982e4f9f912c7cb', 'eb2133e90f3994717385be385f186405')

app.get('/login',cors(), (req,res) => {
    if (req.query.phonenumber) {
       client
       .verify 
       .services('VA3a9ecdae399cbe22e46539c5ad2f8476')
       .verifications
       .create({
           to: `+${req.query.phonenumber}`,
           channel: req.query.channel==='call' ? 'call' : 'sms' 
       })
       .then(data => {
           res.status(200).send({
               message: "SENT",
               phonenumber: req.query.phonenumber,
               data
           })
       }) 
    } else {
       res.status(400).send({
           message: "WRONG",
           phonenumber: req.query.phonenumber,
           data
       })
    }
  })


  app.get('/verify', cors(), (req, res) => {
    if (req.query.phonenumber && (req.query.code).length > 0) {
        client
            .verify
            .services('VA3a9ecdae399cbe22e46539c5ad2f8476')
            .verificationChecks
            .create({
                to: `+${req.query.phonenumber}`,
                code: req.query.code
            })
            .then(data => {
                if (data.status === "approved") {
                    res.status(200).send({
                        message: "VERIFIED",
                        data
                    })
                }
            })
    } else {
        res.status(400).send({
            message: "WRONGCODE(",
            phonenumber: req.query.phonenumber,
            data
        })
    }
  })

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
require("./routes/tutor")(app);
require("./routes/student")(app);
// require("./routes/file");

//razor pay payment gateway

app.post('/verification', (req, res) => {
	// do a validation
	const secret = '12345678'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
})

app.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const amount = 499
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})


if(process.env.NODE_ENV=="production"){
  app.use(express.static('client/build'))
  app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
