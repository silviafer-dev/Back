require("../db");

const passport = require("passport");
const User = require("../models/user-model");
const localStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
// const { secretKey } = require("../env");


passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, {
            status: 400,
            message: "User not found or wrong password",
          });
        }
        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, {
            message: "User not found or wrong password",
          });
        }

        return done(null, user, {
          message: "Logged in Successfully",
        });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
