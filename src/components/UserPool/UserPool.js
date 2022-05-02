import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData={
    UserPoolId:"us-east-1_6E6vE5BtJ",
    ClientId:"4eko7emrg26fdk68hff6k7hs00"
}

export default new CognitoUserPool(poolData);