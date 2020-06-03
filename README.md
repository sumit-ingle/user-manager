# user-manager
[![Build Status](https://secure.travis-ci.org/sumit-ingle/user-manager.png?branch=master)](https://travis-ci.org/sumit-ingle/user-manager)
[![Coverage Status](https://coveralls.io/repos/sumit-ingle/user-manager/badge.svg?branch=master)](https://coveralls.io/r/sumit-ingle/user-manager/?branch=master)

## Setup

1) `git clone <repository_url> && cd <repository_name>`

2) `npm install`

3) Download DynamoDB local from here: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html <br />
    - Extract contents to this directory: https://github.com/sumit-ingle/user-manager/tree/master/dynamodb-local

4) `.\start-dynamodb-local.sh` - starts DynamoDB locally at http://localhost:8000

5) `npm run dev` - starts client app at http://localhost:4200 & server app at http://localhost:3333
