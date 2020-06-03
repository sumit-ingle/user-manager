"use strict";
const dynamo = require('dynamodb');
const Joi = require('joi');
const dbConst = require("../../../server/constants/db.json");

dynamo.AWS.config.update({
  region: "local",
  endpoint: dbConst.DYNAMODB_ENDPOINT
});

const User = dynamo.define('User', {
  hashKey: 'email',
  // adds the timestamp attributes (updatedAt, createdAt)
  timestamps: true,
  schema: {
    email: Joi.string().email(),
    name: Joi.string(),
    roleType: Joi.string(),
    status: Joi.string().trim().valid("Active", "Inactive", "Pending"),
    mobileNo: Joi.string().optional().max(10).regex(/^((\\+91-?)|0)?[0-9]{10}$/)
  }
});

module.exports = User;