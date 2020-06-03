'use strict'
var AWS = require("aws-sdk");
const dbConst = require("../../../../server/constants/db.json");

AWS.config.update({
    region: "local",
    endpoint: dbConst.DYNAMODB_ENDPOINT
});

const dynamodb = new AWS.DynamoDB();

const params = {
    TableName: "users",
    KeySchema: [
        // { AttributeName: "userId", KeyType: "HASH" },  //Partition key
        { AttributeName: "email", KeyType: "HASH" }  //Sort key
    ],
    AttributeDefinitions: [
        // { AttributeName: "userId", AttributeType: "N" },
        { AttributeName: "email", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

dynamodb.createTable(params, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});