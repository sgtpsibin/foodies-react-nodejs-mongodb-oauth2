const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user.model');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const _user = await User.findById(id);
  done(null, _user);
  }
);


passport.use(new GoogleStrategy({
    clientID: '786732207265-gvcmvllcs2h52j62v8uh4ei7nejc8vl2.apps.googleusercontent.com',
    clientSecret: 'TPRuQIHxIy6QsjpQfheI1F42',
    callbackURL: "http://localhost:4000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    const _user = await User.findOne({GoogleID: profile.id});
    if(_user) {
    	cb(null,_user);
    } else {
    	const __user = await new User({
    		GoogleID: profile.id,
    		email:profile.emails[0].value,
    		displayName: profile.displayName,
    		image: profile.photos[0].value
    	}).save();
        cb(null,__user);
    }
  }
));