import { gql } from "@apollo/client";

export const CREATE_TRANSACTION = gql`
  mutation createTransaction($name: String, $amount: Int, $type: String) {
    createTransaction(transaction: { name: $name, amount: $amount, type: $type }) {
      id
      name
      amount
      type
    }
  }
`;

export const DELETE_TRANSACTION = gql`
  mutation deleteTransaction($id: String) {
    deleteTransaction(id: $id)
  }
`;