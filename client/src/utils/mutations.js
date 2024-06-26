import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const FAV_ADD = gql`
mutation favAdd( $title: String!) {
  favAdd(title: $title) {
    _id
    email
    favorites 
    username
  }
}
`;

export const FAV_REMOVE = gql`
mutation favRemove( $title: String!) {
  favRemove(title: $title) {
    _id
    email
    favorites 
    username
  }
}
`;


