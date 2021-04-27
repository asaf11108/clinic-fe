import gql from "graphql-tag";

export type GraphqlOperation = {
    query: any;
    variables: {};
}

export function renameObjKey(obj: GraphqlOperation, newKey: string, oldKey: string): any {
    delete Object.assign(obj, {[newKey]: obj[oldKey] })[oldKey];
    return obj;
}

export function gqlObjTransformer(obj: GraphqlOperation): GraphqlOperation {
    obj.query = gql(obj.query);
    return obj;
}
