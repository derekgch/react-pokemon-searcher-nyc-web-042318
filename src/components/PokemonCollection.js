import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const pokemonsToDisplay = this.props.pokemons.map(p => <PokemonCard key= {p.id} pokemon = {p}/>)
    return (
      <Card.Group itemsPerRow={6}>
        {pokemonsToDisplay}
      </Card.Group>
    )
  }
}

export default PokemonCollection
