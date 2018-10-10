import React, { Component } from 'react'
import Article from '../article'
import accordionDecorator from '../../decorators/accordion'

class ArticleList extends Component {
  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    const { articles, openItemId, toggleOpenItem } = this.props
    return articles.map((article) => (
      <li key={article.id}>
        <Article
          id={article.id}
          title={article.title}
          text={article.text}
          date={article.date}
          comments={article.comments}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))
  }
}

export default accordionDecorator(ArticleList)
