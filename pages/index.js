export default function Home({ initialPokemon }) {
  console.log(initialPokemon);

  return (
    <>
     
    </>
  );
}

export async function getServerSideProps(context) {
  const response  = await fetch("https://pokeapi.co/api/v2/pokemon")
  const initialPokemon = await response.json()

  // let arrayPokemon = [];

  // for (let i = 1; i < !20; i++) {
  //   let data = await cathPokemon(i);
  //   arrayPokemon.push(data);
  // }

  // let initialPokemon = arrayPokemon.map((pokemon) => {
  //   return {
  //     id: pokemon.id,
  //     name: pokemon.name,
  //     image: pokemon.sprites.other.dream_world.front_default,
  //     types: pokemon.types,
  //   };
  // });

  return {
    props: {
      initialPokemon,
    }
  }
}
