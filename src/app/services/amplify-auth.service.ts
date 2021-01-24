import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmplifyAuthService {

  constructor() { }

  // readonly client = new AWSAppSyncClient({
  //   url: awsconfig.aws_appsync_graphqlEndpoint,
  //   region: awsconfig.aws_appsync_region,
  //   auth: {
  //     type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
  //     jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
  //   },
  //   offlineConfig: {}
  // });
}
