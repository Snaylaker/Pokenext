import {gql } from '@apollo/client';
export const GET_GEN1 = gql`
query samplePokeAPIquery {
    gen1_species: pokemon_v2_pokemonspecies(where: {}, order_by: {id: asc}) {
      name
      id
    }
  }
  
`;