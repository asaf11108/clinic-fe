import { APIService } from './../API.service';
import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import awsconfig from 'src/aws-exports';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class AmplifyAuthService {
  readonly client;

  constructor(private apiService: APIService) {
    this.client = new AWSAppSyncClient({
      url: awsconfig.aws_appsync_graphqlEndpoint,
      region: awsconfig.aws_appsync_region,
      auth: {
        type: awsconfig.aws_appsync_authenticationType as any,
        jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
      disableOffline: true
    })
    this.client.query({
      query: gql(apiService.ListPatients().query),
    })
      .then(res => {
        console.log(res)
      })
      .catch(res => {
        console.log(res)
      })
  }
}
