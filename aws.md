 
 * install amplify
  1. npm i -g @aws-amplify/cli
2. amplify configure


AKIA4SEHNZOWKGQZMPHV
CRijqCSY5d0OikU+hn0JxbJtIaE7i/pCUzpAJP/y

3. amplify init


4. npm install aws-amplify amazon-cognito-identity-js @react-native-community/netinfo @react-native-async-storage/async-storage

npm install aws-amplify @aws-amplify/ui-react

5. Finally, open index.js and add the following lines of code at the top of the file below the last import:

import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);


Add amplify auth

1. amplify add auth
2. amplify add api

amplify\backend\api\uber\schema.graphql 

edit file

3. amplify push





1. amplify console


attach policie

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect":"Allow",
            "Action":[
                "dynamodb.PutItem"],
                "Resource":"arn:aws:dynamodb:region:id:table/name-env"(This could be Amazon Resource Name (ARN)
 arn:aws:dynamodb:us-east-1:863572446124:table/User-bhdir6lbdjfwrg7bvkhip2wphy-dev)
        }]
}


* *  if u get same package.json error in amplify please refer this file metro.config.js
somw tige you wull get error when you click signin button

then install npm install @react-native-community/picker


* amplify push

