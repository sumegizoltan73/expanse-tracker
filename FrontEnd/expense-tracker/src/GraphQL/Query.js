import { gql } from "@apollo/client";

export const getALL = gql`
  {
    getAll {
      id
      name
      amount
      type
    }
  }
`;
