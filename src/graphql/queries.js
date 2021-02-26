/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFund = /* GraphQL */ `
  query GetFund($id: ID!) {
    getFund(id: $id) {
      id
      name
      createdAt
      expectedReturn
      risk
      historicalReturn
      aum
      status
      dividend
      updatedAt
    }
  }
`;
export const listFunds = /* GraphQL */ `
  query ListFunds(
    $filter: ModelFundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFunds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        expectedReturn
        risk
        historicalReturn
        aum
        status
        dividend
        updatedAt
      }
      nextToken
    }
  }
`;
