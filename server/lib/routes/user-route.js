"use strict";

const userController = require('../controller/user-controller');

module.exports = class userRoutes {
  static init(router) {
    router
      .route('/api/users')
      .get(userController.getAllUsers)
      .post(userController.createNewUser);

    router
      .route('/api/users/:email')
      .get(userController.getUserByEmail)
      .put(userController.updateUserByEmail)
      .delete(userController.removeUserByEmail);
  }
}
