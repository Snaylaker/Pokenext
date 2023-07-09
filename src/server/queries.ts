import { gql } from '@apollo/client';
export const GET_GEN1 = gql`
query samplePokeAPIquery {
    pokemon_v2_pokemonspecies(order_by: {id: asc}) {
      name
      id
    }
  }
  
`;