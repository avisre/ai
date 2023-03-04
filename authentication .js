const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

// Sure, here's an example Node.js code snippet for authenticating users 
// using Google and Facebook accounts using the passport-google-oauth20 and 
// passport-facebook packages:

// Google authentication
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL
},
    function (accessToken, refreshToken, profile, done) {
        // User is authenticated
        console.log('Authenticated user:', profile);
        return done(null, profile);
    }
));

// Facebook authentication
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'email']
},
    function (accessToken, refreshToken, profile, done) {
        // User is authenticated
        console.log('Authenticated user:', profile);
        return done(null, profile);
    }
));

// Authenticate with Google
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Authenticate with Facebook
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

// Callback for Google authentication
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

// Callback for Facebook authentication
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

//   Note that this code requires the passport, passport-google-oauth20,
//    and passport-facebook packages to be installed in your Node.js project, 
//    and you will need to replace the GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, 
//    GOOGLE_CALLBACK_URL, FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, and FACEBOOK_
//    CALLBACK_URL placeholders with your own values. You will also need to configure 
//    your Google and Facebook authentication providers in their respective developer 
//    consoles and set the appropriate callback URLs.