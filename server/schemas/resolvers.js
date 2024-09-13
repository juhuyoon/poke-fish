const { Food } = require('../models/Food');

const resolvers = {
  Query: {
    foods: async () => {
      return Food.find({});
    }
  },
  Mutation: {
    addFood: async (parent, { name, description, price }) => {
      console.log(name);
      console.log(description);
      return Food.create({ name, description});
      // try {
      //   return Food.create({name, description, price});        
      // } catch (err) {
      //   console.error(err);
      // }
    }
  }
};

module.exports = resolvers;