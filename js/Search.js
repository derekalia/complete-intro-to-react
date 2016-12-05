import React from 'react'
import preload from '../public/data.json'
import ShowCard from './ShowCard'

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },

  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },

  render () {
    return (
      <div className='search'>
        <header>
          <h1>SmartHi</h1>
          <input value={this.state.searchTerm} placeholder='search' onChange={this.handleSearchTermChange} type='text' />
        </header>
        <div>
          { preload.shows
            .filter((show) => {
              return `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            })
            .map((show) => {
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
