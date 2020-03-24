// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

const expressSession = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-oauth2");

require("dotenv").config();
const authRouter = require("./auth");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 * Session Configuration
 */

const session = {
    secret: "LoxodontaElephasMammuthusPalaeoloxodonPrimelephas",
    cookie: {},
    resave: false,
    saveUninitialized: false
  };
  
  if (app.get("env") === "production") {
    // Serve secure cookies, requires HTTPS
    session.cookie.secure = true;
  }

/**
 * Passport Configuration
 */

// const strategy = new OAuth2Strategy(
//     {
//       domain: process.env.WSO2_DOMAIN,
//       clientID: process.env.WSO2_CLIENT_ID,
//       clientSecret: process.env.WSO2_CLIENT_SECRET,
//       callbackURL:
//         process.env.WSO2_CALLBACK_URL || "http://localhost:3001/callback"
//     },
//     function(accessToken, refreshToken, extraParams, profile, done) {
//       /**
//        * Access tokens are used to authorize users to an API
//        * (resource server)
//        * accessToken is the token to call the Auth0 API
//        * or a secured third-party API
//        * extraParams.id_token has the JSON Web Token
//        * profile has all the information from the user
//        */
//       return done(null, profile);
//     }
//   );

  passport.use(new OAuth2Strategy({
    authorizationURL: 'https://localhost:9443/oauth2/authorize',
    tokenURL: 'https://localhost:9443/oauth2/token',
    clientID: process.env.WSO2_CLIENT_ID,
    clientSecret: process.env.WSO2_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ exampleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
  

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use(expressSession(session));

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  // Creating custom middleware with Express
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
  });
  

  // Router mounting
app.use("/", authRouter);

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "WSO2 IAM" } });
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});