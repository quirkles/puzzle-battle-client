import { gql } from '../../../__generated__';

export const LOGIN_USER = gql(`mutation LoginUser($userData: CreateUserArgs!) {
    loginUser  (userData: $userData){
        username,
        lichessId,
        lichessUsername,
        lichessPuzzleRating,
        id
    }
  }
`);
