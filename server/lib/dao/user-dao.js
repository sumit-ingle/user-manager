"use strict";

const User = require('../model/user-model');
const _ = require('lodash');

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    User.scan()
      .loadAll()
      .exec((err, data) => {
        if (err) {
          console.log('Error getting all users', err);
          reject(err);
        } else {
          resolve(data.Items);
        }
      });
  });
}

const createNewUser = (user) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(user)) {
      return reject(new TypeError('user is not a valid object.'));
    }
    User.create(user, (err, user) => {
      if (err) {
        console.log('Error creating user', err);
        reject(err);
      } else {
        console.log('created user in DynamoDB', user.get('email'))
        resolve(user);
      }
    });
  });
}

const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(email)) {
      return reject(new TypeError('Id is not a valid string.'));
    }
    User.get(email, (err, user) => {
      if (err) {
        console.log('Error getting user', err);
        reject(err);
      } else {
        console.log('retrieved user from DynamoDB', user.get('email'))
        resolve(user);
      }
    });
  });
}

const updateUserByEmail = (user) => {
  return new Promise((resolve, reject) => {
    User.update(user, (err, user) => {
      if (err) {
        console.log('Error updating user', err);
        reject(err);
      } else {
        console.log('updated user in DynamoDB', user.get('email'))
        resolve(user.attrs);
      }
    });
  });
}

const removeUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(email)) {
      return reject(new TypeError('Id is not a valid string.'));
    }
    User.destroy(email, (err, user) => {
      if (err) {
        console.log('Error removing user', err);
        reject(err);
      } else {
        console.log('removed user from DynamoDB', user.get('email'))
        resolve(user);
      }
    });
  });
}

module.exports = {
  getAllUsers,
  createNewUser,
  getUserByEmail,
  updateUserByEmail,
  removeUserByEmail
};