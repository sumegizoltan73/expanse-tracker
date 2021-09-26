import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Transaction {
    id: ID
    name: String
    type: String
    amount: Int
  }

  type Query {
    getAll: [Transaction]
  }

  input TransactionInput {
    name: String
    type: String
    amount: Int
  }
  
  type Mutation {
    createTransaction(transaction: TransactionInput): Transaction
    deleteTransaction(id: String): String
  }
`;