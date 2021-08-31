import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';
import * as AWS from 'aws-sdk';
import { Credentials } from 'aws-sdk/lib/credentials';

import { User, UserAttribute } from '../model/Model';
import { config } from './config';

Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: config.REGION,
    userPoolId: config.USER_POOL_ID,
    userPoolWebClientId: config.APP_CLIENT_ID,
    //identityPoolId: config.IDENTITY_POOL_ID,
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  },
});

export class AuthService {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    try {
      const user = (await Auth.signIn(userName, password)) as CognitoUser;
      return {
        cognitoUser: user,
        userName: user.getUsername(),
      };
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async getUserAttributes(user: User): Promise<UserAttribute[]> {
    const result: UserAttribute[] = [];
    const attributes = await Auth.userAttributes(user.cognitoUser);
    result.push(...attributes);
    // result.push({ Name: 'Iowa', Value: 'Hawkeyes' });
    // result.push({ Name: 'Wisconsin', Value: 'Badgers' });
    // result.push({ Name: 'Northwester', Value: 'Wildcats' });
    // result.push({ Name: 'Minnesota', Value: 'Golden Gophers' });
    // result.push({ Name: 'Illinois', Value: 'Fighting Illni' });
    return result;
  }

  public async getAWSTemporaryCreds(user: CognitoUser) {
    const cognitoIdentityPool = `cognito-idp.${config.REGION}.amazonaws.com/${config.USER_POOL_ID}`;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials(
      {
        IdentityPoolId: config.IDENTITY_POOL_ID,
        Logins: {
          [cognitoIdentityPool]: user
            .getSignInUserSession()!
            .getIdToken()
            .getJwtToken(),
        },
      },
      {
        region: config.REGION,
      }
    );
    await this.refreshCredentials();
  }

  private async refreshCredentials(): Promise<void> {
    return new Promise((resolve, reject) => {
      (AWS.config.credentials as Credentials).refresh((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
