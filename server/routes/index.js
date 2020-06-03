"use strict";
const userRoutes = require("../lib/routes/user-route");
const StaticDispatcher = require("../commons/static/index");

module.exports = class Routes {
   static init(app, router) {
     userRoutes.init(router);
     router
       .route("*")
       .get(StaticDispatcher.sendIndex);
     app.use("/", router);
   }
}
