import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import { Route } from 'react-router-dom';
import SearchMovies from './SearchMovies';
import Section from './Section'

class BooksApp extends React.Component {
  state = {
    movies: [],
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((movies) => {
        this.setState(() => ({
          movies
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Section allMovies={this.state.movies}/>
            <Section allMovies={this.state.movies}/>
            <Section allMovies={this.state.movies}/>
          </div>
        )} />

        <Route path='/search' component={SearchMovies} />
          
      </div>
    )
  }
}

export default BooksApp
