
#!/bin/sh +x +e

# start dynamodb local
echo "**************************starting dynamodb local**************************" && java -D"java.library.path=./dynamodb-local/DynamoDBLocal_lib" -jar ./dynamodb-local/DynamoDBLocal.jar -sharedDb