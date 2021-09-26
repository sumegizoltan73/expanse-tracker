import { Transaction } from "./models/Transaction.js";

export const resolvers = {
  Query: {
    getAll: async () => {
      return await Transaction.find();
    }
  },
  Mutation: {
    createTransaction: async (parent, args, context, info) => {
      const { name, amount, type } = args.transaction;
      const trans = await new Transaction({ name, amount, type });
      await trans.save();
      return trans;
    },
    deleteTransaction: async (parent, args, context, info) => {
      const { id } = args;
      await Transaction.findByIdAndDelete(id);
      return "Deleted";
    }
  }
};