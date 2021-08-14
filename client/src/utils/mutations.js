import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation signUp($name: String!, $email: String!, $password: String!, $age: Int!, $weight: Int!, $gender: String!) {
    addUser(name: $name, email: $email, password: $password, age: $age, weight: $weight, gender: $gender) {
      token
      user {
        _id
        username
      }
    }
  }
`;
