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
    clientID: '786732207265-9smu8ustdsi1lncij5dimjck7glir2f5.apps.googleusercontent.com',
    clientSecret: 'YXCmT0ZInC0OPWgJrvnKQ1xr',
    callbackURL: "https://react-foodies.herokuapp.com/auth/google/callback"
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