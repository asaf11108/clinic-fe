/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreatePatientInput = {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  cellphone?: string | null;
  address?: string | null;
  email?: string | null;
  fax?: string | null;
  birthDay?: string | null;
  familyStatus?: string | null;
  children?: string | null;
  height?: number | null;
  weight?: number | null;
  momOrg?: string | null;
  dadOrg?: string | null;
};

export type ModelPatientConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  cellphone?: ModelStringInput | null;
  address?: ModelStringInput | null;
  email?: ModelStringInput | null;
  fax?: ModelStringInput | null;
  birthDay?: ModelStringInput | null;
  familyStatus?: ModelStringInput | null;
  children?: ModelStringInput | null;
  height?: ModelIntInput | null;
  weight?: ModelFloatInput | null;
  momOrg?: ModelStringInput | null;
  dadOrg?: ModelStringInput | null;
  and?: Array<ModelPatientConditionInput | null> | null;
  or?: Array<ModelPatientConditionInput | null> | null;
  not?: ModelPatientConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdatePatientInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  cellphone?: string | null;
  address?: string | null;
  email?: string | null;
  fax?: string | null;
  birthDay?: string | null;
  familyStatus?: string | null;
  children?: string | null;
  height?: number | null;
  weight?: number | null;
  momOrg?: string | null;
  dadOrg?: string | null;
};

export type DeletePatientInput = {
  id?: string | null;
};

export type CreateMeetingInput = {
  id?: string | null;
  patientId: string;
  date: string;
  description?: string | null;
  weight?: number | null;
};

export type ModelMeetingConditionInput = {
  patientId?: ModelIDInput | null;
  date?: ModelStringInput | null;
  description?: ModelStringInput | null;
  weight?: ModelFloatInput | null;
  and?: Array<ModelMeetingConditionInput | null> | null;
  or?: Array<ModelMeetingConditionInput | null> | null;
  not?: ModelMeetingConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateMeetingInput = {
  id: string;
  patientId?: string | null;
  date?: string | null;
  description?: string | null;
  weight?: number | null;
};

export type DeleteMeetingInput = {
  id?: string | null;
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  cellphone?: ModelStringInput | null;
  address?: ModelStringInput | null;
  email?: ModelStringInput | null;
  fax?: ModelStringInput | null;
  birthDay?: ModelStringInput | null;
  familyStatus?: ModelStringInput | null;
  children?: ModelStringInput | null;
  height?: ModelIntInput | null;
  weight?: ModelFloatInput | null;
  momOrg?: ModelStringInput | null;
  dadOrg?: ModelStringInput | null;
  and?: Array<ModelPatientFilterInput | null> | null;
  or?: Array<ModelPatientFilterInput | null> | null;
  not?: ModelPatientFilterInput | null;
};

export type ModelMeetingFilterInput = {
  id?: ModelIDInput | null;
  patientId?: ModelIDInput | null;
  date?: ModelStringInput | null;
  description?: ModelStringInput | null;
  weight?: ModelFloatInput | null;
  and?: Array<ModelMeetingFilterInput | null> | null;
  or?: Array<ModelMeetingFilterInput | null> | null;
  not?: ModelMeetingFilterInput | null;
};

export type CreatePatientMutation = {
  __typename: "Patient";
  id: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  cellphone: string | null;
  address: string | null;
  email: string | null;
  fax: string | null;
  birthDay: string | null;
  familyStatus: string | null;
  children: string | null;
  height: number | null;
  weight: number | null;
  momOrg: string | null;
  dadOrg: string | null;
  meetings: {
    __typename: "ModelMeetingConnection";
    items: Array<{
      __typename: "Meeting";
      id: string;
      patientId: string;
      date: string;
      description: string | null;
      weight: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePatientMutation = {
  __typename: "Patient";
  id: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  cellphone: string | null;
  address: string | null;
  email: string | null;
  fax: string | null;
  birthDay: string | null;
  familyStatus: string | null;
  children: string | null;
  height: number | null;
  weight: number | null;
  momOrg: string | null;
  dadOrg: string | null;
  meetings: {
    __typename: "ModelMeetingConnection";
    items: Array<{
      __typename: "Meeting";
      id: string;
      patientId: string;
      date: string;
      description: string | null;
      weight: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePatientMutation = {
  __typename: "Patient";
  id: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  cellphone: string | null;
  address: string | null;
  email: string | null;
  fax: string | null;
  birthDay: string | null;
  familyStatus: string | null;
  children: string | null;
  height: number | null;
  weight: number | null;
  momOrg: string | null;
  dadOrg: string | null;
  meetings: {
    __typename: "ModelMeetingConnection";
    items: Array<{
      __typename: "Meeting";
      id: string;
      patientId: string;
      date: string;
      description: string | null;
      weight: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateMeetingMutation = {
  __typename: "Meeting";
  id: string;
  patientId: string;
  date: string;
  description: string | null;
  weight: number | null;
  patient: {
    __typename: "Patient";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    cellphone: string | null;
    address: string | null;
    email: string | null;
    fax: string | null;
    birthDay: string | null;
    familyStatus: string | null;
    children: string | null;
    height: number | null;
    weight: number | null;
    momOrg: string | null;
    dadOrg: string | null;
    meetings: {
      __typename: "ModelMeetingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMeetingMutation = {
  __typename: "Meeting";
  id: string;
  patientId: string;
  date: string;
  description: string | null;
  weight: number | null;
  patient: {
    __typename: "Patient";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    cellphone: string | null;
    address: string | null;
    email: string | null;
    fax: string | null;
    birthDay: string | null;
    familyStatus: string | null;
    children: string | null;
    height: number | null;
    weight: number | null;
    momOrg: string | null;
    dadOrg: string | null;
    meetings: {
      __typename: "ModelMeetingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteMeetingMutation = {
  __typename: "Meeting";
  id: string;
  patientId: string;
  date: string;
  description: string | null;
  weight: number | null;
  patient: {
    __typename: "Patient";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    cellphone: string | null;
    address: string | null;
    email: string | null;
    fax: string | null;
    birthDay: string | null;
    familyStatus: string | null;
    children: string | null;
    height: number | null;
    weight: number | null;
    momOrg: string | null;
    dadOrg: string | null;
    meetings: {
      __typename: "ModelMeetingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetPatientQuery = {
  __typename: "Patient";
  id: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  cellphone: string | null;
  address: string | null;
  email: string | null;
  fax: string | null;
  birthDay: string | null;
  familyStatus: string | null;
  children: string | null;
  height: number | null;
  weight: number | null;
  momOrg: string | null;
  dadOrg: string | null;
  meetings: {
    __typename: "ModelMeetingConnection";
    items: Array<{
      __typename: "Meeting";
      id: string;
      patientId: string;
      date: string;
      description: string | null;
      weight: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPatientsQuery = {
  __typename: "ModelPatientConnection";
  items: Array<{
    __typename: "Patient";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    cellphone: string | null;
    address: string | null;
    email: string | null;
    fax: string | null;
    birthDay: string | null;
    familyStatus: string | null;
    children: string | null;
    height: number | null;
    weight: number | null;
    momOrg: string | null;
    dadOrg: string | null;
    meetings: {
      __typename: "ModelMeetingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetMeetingQuery = {
  __typename: "Meeting";
  id: string;
  patientId: string;
  date: string;
  description: string | null;
  weight: number | null;
  patient: {
    __typename: "Patient";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    cellphone: string | null;
    address: string | null;
    email: string | null;
    fax: string | null;
    birthDay: string | null;
    familyStatus: string | null;
    children: string | null;
    height: number | null;
    weight: number | null;
    momOrg: string | null;
    dadOrg: string | null;
    meetings: {
      __typename: "ModelMeetingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListMeetingsQuery = {
  __typename: "ModelMeetingConnection";
  items: Array<{
    __typename: "Meeting";
    id: string;
    patientId: string;
    date: string;
    description: string | null;
    weight: number | null;
    patient: {
      __typename: "Patient";
      id: string;
      firstName: string | null;
      lastName: string | null;
      phone: string | null;
      cellphone: string | null;
      address: string | null;
      email: string | null;
      fax: string | null;
      birthDay: string | null;
      familyStatus: string | null;
      children: string | null;
      height: number | null;
      weight: number | null;
      momOrg: string | null;
      dadOrg: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreatePatientSubscription = {
  __typename: "Patient";
  id: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  cellphone: string | null;
  address: string | null;
  email: string | null;
  fax: string | null;
  birthDay: string | null;
  familyStatus: string | null;
  children: string | null;
  height: number | null;
  weight: number | null;
  momOrg: string | null;
  dadOrg: string | null;
  meetings: {
    __typename: "ModelMeetingConnection";
    items: Array<{
      __typename: "Meeting";
      id: string;
      patientId: string;
      date: string;
      description: string | null;
      weight: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePatientSubscription = {
  __typename: "Patient";
  id: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  cellphone: string | null;
  address: string | null;
  email: string | null;
  fax: string | null;
  birthDay: string | null;
  familyStatus: string | null;
  children: string | null;
  height: number | null;
  weight: number | null;
  momOrg: string | null;
  dadOrg: string | null;
  meetings: {
    __typename: "ModelMeetingConnection";
    items: Array<{
      __typename: "Meeting";
      id: string;
      patientId: string;
      date: string;
      description: string | null;
      weight: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePatientSubscription = {
  __typename: "Patient";
  id: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  cellphone: string | null;
  address: string | null;
  email: string | null;
  fax: string | null;
  birthDay: string | null;
  familyStatus: string | null;
  children: string | null;
  height: number | null;
  weight: number | null;
  momOrg: string | null;
  dadOrg: string | null;
  meetings: {
    __typename: "ModelMeetingConnection";
    items: Array<{
      __typename: "Meeting";
      id: string;
      patientId: string;
      date: string;
      description: string | null;
      weight: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMeetingSubscription = {
  __typename: "Meeting";
  id: string;
  patientId: string;
  date: string;
  description: string | null;
  weight: number | null;
  patient: {
    __typename: "Patient";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    cellphone: string | null;
    address: string | null;
    email: string | null;
    fax: string | null;
    birthDay: string | null;
    familyStatus: string | null;
    children: string | null;
    height: number | null;
    weight: number | null;
    momOrg: string | null;
    dadOrg: string | null;
    meetings: {
      __typename: "ModelMeetingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateMeetingSubscription = {
  __typename: "Meeting";
  id: string;
  patientId: string;
  date: string;
  description: string | null;
  weight: number | null;
  patient: {
    __typename: "Patient";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    cellphone: string | null;
    address: string | null;
    email: string | null;
    fax: string | null;
    birthDay: string | null;
    familyStatus: string | null;
    children: string | null;
    height: number | null;
    weight: number | null;
    momOrg: string | null;
    dadOrg: string | null;
    meetings: {
      __typename: "ModelMeetingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteMeetingSubscription = {
  __typename: "Meeting";
  id: string;
  patientId: string;
  date: string;
  description: string | null;
  weight: number | null;
  patient: {
    __typename: "Patient";
    id: string;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    cellphone: string | null;
    address: string | null;
    email: string | null;
    fax: string | null;
    birthDay: string | null;
    familyStatus: string | null;
    children: string | null;
    height: number | null;
    weight: number | null;
    momOrg: string | null;
    dadOrg: string | null;
    meetings: {
      __typename: "ModelMeetingConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePatient(
    input: CreatePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<CreatePatientMutation> {
    const statement = `mutation CreatePatient($input: CreatePatientInput!, $condition: ModelPatientConditionInput) {
        createPatient(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          phone
          cellphone
          address
          email
          fax
          birthDay
          familyStatus
          children
          height
          weight
          momOrg
          dadOrg
          meetings {
            __typename
            items {
              __typename
              id
              patientId
              date
              description
              weight
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePatientMutation>response.data.createPatient;
  }
  async UpdatePatient(
    input: UpdatePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<UpdatePatientMutation> {
    const statement = `mutation UpdatePatient($input: UpdatePatientInput!, $condition: ModelPatientConditionInput) {
        updatePatient(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          phone
          cellphone
          address
          email
          fax
          birthDay
          familyStatus
          children
          height
          weight
          momOrg
          dadOrg
          meetings {
            __typename
            items {
              __typename
              id
              patientId
              date
              description
              weight
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePatientMutation>response.data.updatePatient;
  }
  async DeletePatient(
    input: DeletePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<DeletePatientMutation> {
    const statement = `mutation DeletePatient($input: DeletePatientInput!, $condition: ModelPatientConditionInput) {
        deletePatient(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          phone
          cellphone
          address
          email
          fax
          birthDay
          familyStatus
          children
          height
          weight
          momOrg
          dadOrg
          meetings {
            __typename
            items {
              __typename
              id
              patientId
              date
              description
              weight
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePatientMutation>response.data.deletePatient;
  }
  async CreateMeeting(
    input: CreateMeetingInput,
    condition?: ModelMeetingConditionInput
  ): Promise<CreateMeetingMutation> {
    const statement = `mutation CreateMeeting($input: CreateMeetingInput!, $condition: ModelMeetingConditionInput) {
        createMeeting(input: $input, condition: $condition) {
          __typename
          id
          patientId
          date
          description
          weight
          patient {
            __typename
            id
            firstName
            lastName
            phone
            cellphone
            address
            email
            fax
            birthDay
            familyStatus
            children
            height
            weight
            momOrg
            dadOrg
            meetings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMeetingMutation>response.data.createMeeting;
  }
  async UpdateMeeting(
    input: UpdateMeetingInput,
    condition?: ModelMeetingConditionInput
  ): Promise<UpdateMeetingMutation> {
    const statement = `mutation UpdateMeeting($input: UpdateMeetingInput!, $condition: ModelMeetingConditionInput) {
        updateMeeting(input: $input, condition: $condition) {
          __typename
          id
          patientId
          date
          description
          weight
          patient {
            __typename
            id
            firstName
            lastName
            phone
            cellphone
            address
            email
            fax
            birthDay
            familyStatus
            children
            height
            weight
            momOrg
            dadOrg
            meetings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMeetingMutation>response.data.updateMeeting;
  }
  async DeleteMeeting(
    input: DeleteMeetingInput,
    condition?: ModelMeetingConditionInput
  ): Promise<DeleteMeetingMutation> {
    const statement = `mutation DeleteMeeting($input: DeleteMeetingInput!, $condition: ModelMeetingConditionInput) {
        deleteMeeting(input: $input, condition: $condition) {
          __typename
          id
          patientId
          date
          description
          weight
          patient {
            __typename
            id
            firstName
            lastName
            phone
            cellphone
            address
            email
            fax
            birthDay
            familyStatus
            children
            height
            weight
            momOrg
            dadOrg
            meetings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMeetingMutation>response.data.deleteMeeting;
  }
  async GetPatient(id: string): Promise<GetPatientQuery> {
    const statement = `query GetPatient($id: ID!) {
        getPatient(id: $id) {
          __typename
          id
          firstName
          lastName
          phone
          cellphone
          address
          email
          fax
          birthDay
          familyStatus
          children
          height
          weight
          momOrg
          dadOrg
          meetings {
            __typename
            items {
              __typename
              id
              patientId
              date
              description
              weight
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPatientQuery>response.data.getPatient;
  }
  async ListPatients(
    filter?: ModelPatientFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPatientsQuery> {
    const statement = `query ListPatients($filter: ModelPatientFilterInput, $limit: Int, $nextToken: String) {
        listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            firstName
            lastName
            phone
            cellphone
            address
            email
            fax
            birthDay
            familyStatus
            children
            height
            weight
            momOrg
            dadOrg
            meetings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPatientsQuery>response.data.listPatients;
  }
  async GetMeeting(id: string): Promise<GetMeetingQuery> {
    const statement = `query GetMeeting($id: ID!) {
        getMeeting(id: $id) {
          __typename
          id
          patientId
          date
          description
          weight
          patient {
            __typename
            id
            firstName
            lastName
            phone
            cellphone
            address
            email
            fax
            birthDay
            familyStatus
            children
            height
            weight
            momOrg
            dadOrg
            meetings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMeetingQuery>response.data.getMeeting;
  }
  async ListMeetings(
    filter?: ModelMeetingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMeetingsQuery> {
    const statement = `query ListMeetings($filter: ModelMeetingFilterInput, $limit: Int, $nextToken: String) {
        listMeetings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            patientId
            date
            description
            weight
            patient {
              __typename
              id
              firstName
              lastName
              phone
              cellphone
              address
              email
              fax
              birthDay
              familyStatus
              children
              height
              weight
              momOrg
              dadOrg
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMeetingsQuery>response.data.listMeetings;
  }
  OnCreatePatientListener: Observable<
    SubscriptionResponse<OnCreatePatientSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePatient {
        onCreatePatient {
          __typename
          id
          firstName
          lastName
          phone
          cellphone
          address
          email
          fax
          birthDay
          familyStatus
          children
          height
          weight
          momOrg
          dadOrg
          meetings {
            __typename
            items {
              __typename
              id
              patientId
              date
              description
              weight
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePatientSubscription>>;

  OnUpdatePatientListener: Observable<
    SubscriptionResponse<OnUpdatePatientSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePatient {
        onUpdatePatient {
          __typename
          id
          firstName
          lastName
          phone
          cellphone
          address
          email
          fax
          birthDay
          familyStatus
          children
          height
          weight
          momOrg
          dadOrg
          meetings {
            __typename
            items {
              __typename
              id
              patientId
              date
              description
              weight
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePatientSubscription>>;

  OnDeletePatientListener: Observable<
    SubscriptionResponse<OnDeletePatientSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePatient {
        onDeletePatient {
          __typename
          id
          firstName
          lastName
          phone
          cellphone
          address
          email
          fax
          birthDay
          familyStatus
          children
          height
          weight
          momOrg
          dadOrg
          meetings {
            __typename
            items {
              __typename
              id
              patientId
              date
              description
              weight
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePatientSubscription>>;

  OnCreateMeetingListener: Observable<
    SubscriptionResponse<OnCreateMeetingSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMeeting {
        onCreateMeeting {
          __typename
          id
          patientId
          date
          description
          weight
          patient {
            __typename
            id
            firstName
            lastName
            phone
            cellphone
            address
            email
            fax
            birthDay
            familyStatus
            children
            height
            weight
            momOrg
            dadOrg
            meetings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateMeetingSubscription>>;

  OnUpdateMeetingListener: Observable<
    SubscriptionResponse<OnUpdateMeetingSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMeeting {
        onUpdateMeeting {
          __typename
          id
          patientId
          date
          description
          weight
          patient {
            __typename
            id
            firstName
            lastName
            phone
            cellphone
            address
            email
            fax
            birthDay
            familyStatus
            children
            height
            weight
            momOrg
            dadOrg
            meetings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateMeetingSubscription>>;

  OnDeleteMeetingListener: Observable<
    SubscriptionResponse<OnDeleteMeetingSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMeeting {
        onDeleteMeeting {
          __typename
          id
          patientId
          date
          description
          weight
          patient {
            __typename
            id
            firstName
            lastName
            phone
            cellphone
            address
            email
            fax
            birthDay
            familyStatus
            children
            height
            weight
            momOrg
            dadOrg
            meetings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteMeetingSubscription>>;
}
