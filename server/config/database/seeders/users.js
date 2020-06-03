'use-strict'
const AWS = require("aws-sdk");
const dbConst = require("../../../../server/constants/db.json");

// var fs = require('fs');
AWS.config.update({
    region: "local",
    endpoint: dbConst.DYNAMODB_ENDPOINT
});
const ddb = new AWS.DynamoDB();
console.log("Importing users into DynamoDB. Please wait.");
// var users = JSON.parse(fs.readFileSync('userData.json', 'utf8'));
// const users = [
//     {
//         user_id: 1,
//         email: "inglesumit30@yahoo.in",
//         name: "Sumit Ingle",
//         role_type: "Developer",
//         status: 1
//     },
//     {
//         user_id: 2,
//         email: "raman@locusnine.com",
//         name: "Raman Sah",
//         role_type: "Admin",
//         status: 1
//     }
// ]

const params = {
    RequestItems: {
        "users": [
            {
                PutRequest: {
                    Item: {
                        "email": { "S": "inglesumit30@yahoo.in" },
                        "name": { "S": "Sumit Ingle" },
                        "roleType": { "S": "Customer Executive" },
                        "status": { "S": "Active" }
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        "email": { "S": "raman@locusnine.com" },
                        "name": { "S": "Raman Sah" },
                        "roleType": { "S": "Admin" },
                        "status": { "S": "Active" }
                    }
                }
            }
        ]
    }
};

ddb.batchWriteItem(params, function (err, data) {
    if (err) {
        console.error("Unable to add user", data, ". Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("PutItem succeeded:", data);
    }
});