const typeDefs = `
  type Food {
    _id: ID
    name: String!
    description: String!
  }

  type Query {
    foods: [Food]!
  }

  type Mutation {
    addFood(name: String!, description: String!): Food
  }
`

module.exports = typeDefs;