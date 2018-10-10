import React, { Component } from 'react'
import ArticleList from './article-list'
import ArticleChart from './articles-chart'
import articles from '../fixtures'
import DateRangePicker from './date-range-picker'

class App extends Component {
  render() {
    return (
      <div>
        <DateRangePicker />
        <ArticleList articles={articles} />
        <ArticleChart articles={articles} />
      </div>
    )
  }

  get options() {
    return articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }
}

export default App
