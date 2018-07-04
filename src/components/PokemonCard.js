import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
    state = {
      flip: false
    }

  handleFlip= ()=>{
    if(this.state.flip){this.setState({flip : false})}
    else{this.setState({flip:true})}
  }
  render() {
    let {name, sprites, stats} = this.props.pokemon;
    let url = sprites.front;
    if(this.state.flip) url = sprites.back
    return (
      <Card>
        <div onClick = {this.handleFlip}>
          <div className="image">
            <img src={url} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
