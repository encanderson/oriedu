import express from "express";
import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";

import { AccessToken } from "../../utils";
import { Blocklist } from "../subscribers";

passport.use(
  new BearerStrategy(async (token, done) => {
    try {
      await Blocklist.verifyToken(token);
      const payload = AccessToken.verifyToken(token);
      done(null, payload);
    } catch (err) {
      if (err.message === "jwt expired") {
        done(err, null);
      } else {
        done(err);
      }
    }
  })
);

export const initialize = (app: express.Application): void => {
  app.use(passport.initialize());
};
