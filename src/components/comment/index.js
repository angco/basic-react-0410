import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    const { content, author } = this.props

    return (
      <li>
        <span>{content}</span>
        <i>by {author}</i>
      </li>
    )
  }
}

export default Comment
