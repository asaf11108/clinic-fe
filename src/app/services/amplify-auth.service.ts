import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import awsconfig from '../../aws-exports';

@Injectable({
  providedIn: 'root'
})
export class AmplifyAuthService {

  constructor() { }

  readonly client = new AWSAppSyncClient({
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth: {
      type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
      jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
    },
    offlineConfig: {}
  });
}
