import React, { Component } from 'react'

const Hideable = (OriginalComponent) =>
  class Hideable extends Component {
    state = {
      isOpen: false
    }

    toggleOpen = () => this.setState((prev) => ({ isOpen: !prev.isOpen }))

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpen={this.state.isOpen}
          toggleOpen={this.toggleOpen}
        />
      )
    }
  }

export default Hideable
