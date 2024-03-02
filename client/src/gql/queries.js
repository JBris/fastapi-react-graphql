import { gql } from '@apollo/client';

export const GET_IRIS = gql`
    query iris($pagination: PaginationInput!) {
        iris(pagination: $pagination) {
            id
            sepalWidth
            sepalLength
            petalWidth
            petalLength
            species
        }
    }
`;

export const GET_PREDICTIONS = gql`
    query predictions($pagination: PaginationInput!) {
        predictions(pagination: $pagination) {
            id
            sepalWidth
            sepalLength
            petalWidth
            petalLength
            species
        }
    }
`;