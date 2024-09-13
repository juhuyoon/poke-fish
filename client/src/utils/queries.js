import { gql } from '@apollo/client';

export const GET_FOODS = gql`
  query getFoods {
    foods {
      _id
      name
      description
    }
  }
`