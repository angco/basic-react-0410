import React, { Component } from 'react'
import ArticleList from './article-list'
import ArticleChart from './articles-chart'
import articles from '../fixtures'

class App extends Component {
  state = {
    selected: null
  }

  render() {
    return (
      <div>
        <ArticleList articles={articles} />
        <ArticleChart articles={articles} />
      </div>
    )
  }

  handleSelectionChange = (selected) => this.setState({ selected })

  get options() {
    return articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }
}

export default App
