import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state={
    pokemons:[],
    search: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon").then(j => j.json()).then(data =>{
      this.setState({
        pokemons:data
      })
    })
  }

  handleSearch =(event, {value}) => {
    this.setState({search: value})

  }



  render() {
    let filtered = this.state.pokemons;
    if(this.state.search){
      filtered = this.state.pokemons.filter(p => p.name.toLowerCase().includes(this.state.search.toLowerCase()))
    }
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={filtered}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
