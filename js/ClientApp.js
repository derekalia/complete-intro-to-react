import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          { /* you could put a <nav/> here if you wanted the nav bar to render on each page */ }
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
