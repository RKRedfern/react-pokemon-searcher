import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  cardFlip = () => {
    
  }

  render() {
    return (
      <Card onClick={this.cardFlip}>
        <div>
          <div className="image">
            <img src={this.props.pokemon.sprites.front} alt={this.props.pokemon.name}/>
          </div>
          <div className="content">
            <div className="header">
              <h4>{this.props.pokemon.name}</h4>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              <h4>{this.props.pokemon.hp}</h4>
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
