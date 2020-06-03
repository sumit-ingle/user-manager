"use strict";

const userDAO = require('../dao/user-dao');

module.exports = class userController {
  static getAllUsers(req, res) {
    userDAO
      .getAllUsers()
      .then(users => res.status(200).json(users))
      .catch(error => res.status(400).json(error));
  }

  static createNewUser(req, res) {
    const _user = req.body;
    userDAO
      .createNewUser(_user)
      .then(user => res.status(201).json(user))
      .catch(error => res.status(400).json(error));
  }

  static getUserByEmail(req, res) {
    const email = req.params.email;
    userDAO
      .getUserByEmail(email)
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error));
  }

  static updateUserByEmail(req, res) {
    userDAO
      .updateUserByEmail(req.body)
      .then(user => res.status(204).end())
      .catch(error => res.status(400).json(error));
  }

  static removeUserByEmail(req, res) {
    const email = req.params.email;
    userDAO
      .removeUserByEmail(email)
      .then(() => res.status(204).end())
      .catch(error => res.status(400).json(error));
  }
}
