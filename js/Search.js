import React from 'react'
import preload from '../public/data.json'
import ShowCard from './ShowCard'

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'default string'
    }
  },

  handleSearchTermChange (event) {
    return (
      this.setState({searchTerm: this.target.value})
    )
  },

  render () {
    return (
      <div className='search'>
        <header>
          <h1>SmartHi</h1>
          <input value={this.state.searchTerm} placeholder='search' onChange={this.handleSearchTermChange} type='text' />
        </header>
        <div>
          { preload.shows.map((show) => {
            return (
              <ShowCard key={show.imdbID} {...show} />
            )
          })}
        </div>
      </div>
    )
  }
})

export default Search
