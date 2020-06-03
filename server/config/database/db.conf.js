"use strict";

const dbConst = require("../../constants/db.json");
const dynamo = require('dynamodb');

module.exports = class DBConfig {
    static init() {
      dynamo.AWS.config.update({
        region: "local",
        endpoint: dbConst.DYNAMODB_ENDPOINT
      });
    }
};
