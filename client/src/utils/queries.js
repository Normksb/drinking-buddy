import { gql } from "@apollo/client";

export const QUERY_PROFILE = gql`
  query user($profile_id: ID!) {
    user(userId: $profile_id) {
      name
      email
      password
      age
      weight
      gender
    }
  }
`;

export const QUERY_DRINKS = gql`
  query GetDrinks {
    drinks {
      _id
      Drink
      Potency
      Volume
    }
  }
`;
