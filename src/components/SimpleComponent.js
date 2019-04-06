import React, {Component} from 'react'

class SimpleComponent extends Component {

  constructor() {
    super()
    this.state = {
      mood: 'happy'
    }
  }

    render() {
      return (
        <div onClick={this.handleClick}>
          {this.state.mood}
        </div>
      )
    }

    handleClick = () => {
      if (this.state.mood === 'happy') {
        return this.setState({mood: 'sad'})
      }
      this.setState({mood: 'happy'})
  }

}

export default SimpleComponent
