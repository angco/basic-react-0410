import React, { PureComponent } from 'react'

import CommentList from '../comment-list'

class Article extends PureComponent {
  render() {
    const { title, isOpen } = this.props

    const buttonText = isOpen ? 'close' : 'open'

    return (
      <div>
        <h3>{title}</h3>
        <button onClick={this.onButtonClick}>{buttonText}</button>
        {this.body}
      </div>
    )
  }

  onButtonClick = () => this.props.toggleOpen(this.props.id)

  get body() {
    const { isOpen, text, date, comments = [] } = this.props

    if (!isOpen) {
      return null
    }

    return (
      <section>
        <div>{text}</div>
        <i>{date}</i>
        <CommentList comments={comments} />
      </section>
    )
  }
}

export default Article
