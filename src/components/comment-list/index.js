import React, { Component } from 'react'

import Comment from '../comment'
import Hideable from '../../decorators/hideable'

class CommentList extends Component {
  render() {
    const { isOpen, toggleOpen } = this.props

    const buttonText = isOpen ? 'Hide comments' : 'Show comments'
    return (
      <div>
        <button onClick={toggleOpen}>{buttonText}</button>
        <ul>{this.items}</ul>
      </div>
    )
  }

  get items() {
    const { comments, isOpen } = this.props

    if (!isOpen) {
      return null
    }

    return comments.map((comment) => (
      <Comment key={comment.id} content={comment.text} author={comment.user} />
    ))
  }
}

export default Hideable(CommentList)
