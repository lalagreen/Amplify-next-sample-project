/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFund = /* GraphQL */ `
  mutation CreateFund(
    $input: CreateFundInput!
    $condition: ModelFundConditionInput
  ) {
    createFund(input: $input, condition: $condition) {
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
export const updateFund = /* GraphQL */ `
  mutation UpdateFund(
    $input: UpdateFundInput!
    $condition: ModelFundConditionInput
  ) {
    updateFund(input: $input, condition: $condition) {
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
export const deleteFund = /* GraphQL */ `
  mutation DeleteFund(
    $input: DeleteFundInput!
    $condition: ModelFundConditionInput
  ) {
    deleteFund(input: $input, condition: $condition) {
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
