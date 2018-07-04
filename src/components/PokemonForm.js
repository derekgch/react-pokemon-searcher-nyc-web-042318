import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    let {name, hp, frontUrl, backUrl} = this.state;
    this.setState({ name, hp, frontUrl, backUrl }, this.postReq)
    // this.setState({ submittedName: name, submittedEmail: email })
  }

  postReq(){
    let {name, hp, frontUrl, backUrl} = this.state;

    let config = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/JSON',
            'Data-Type': 'application/JSON'
      },
      body: JSON.stringify({
        name, 
        stats:[{ value: 80,name: "special-defense"},
        {
          value: 80,
          name: "special-attack"
        },
        {
          value: 63,
          name: "defense"
        },
        {
          value: 62,
          name: "attack"
        },
        {
          value: 60,
          name: "speed"
        },{value:hp, name:"hp"}],
        sprites: {front :frontUrl, back: backUrl}
      })
    };

    console.log(config)

    
    fetch("http://localhost:3000/pokemon", config)
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
