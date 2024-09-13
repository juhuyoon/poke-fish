import { gql } from '@apollo/client';

export const ADD_FOOD = gql`
  mutation addFood($name: String!, $description: String!) {
    addFood(name: $name, description: $description) {
      name
      description
      _id
    }
  }
`