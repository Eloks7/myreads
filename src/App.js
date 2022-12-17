import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import Section from './Section';

class BooksApp extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  shelfBooks = (books) => {
    const stillReading = books.filter(book => book.shelf === "currentlyReading");
    const willRead = books.filter(book => book.shelf === "wantToRead");
    const alreadyRead = books.filter(book => book.shelf === "read");

    this.setState(() => ({
        currentlyReading: stillReading,
        wantToRead: willRead,
        read: alreadyRead
    }))
  }

  render() {

    if (this.state.books){
      this.shelfBooks(this.state.books);
    }
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Section allBooks={this.state.books}/>
            {/* <Section allMovies={this.state.books}/>
            <Section allMovies={this.state.books}/> */}
          </div>
        )} />

        <Route path='/search' render={() => (
          <SearchBooks allBooks={this.state.books}/>
        )} />
          
      </div>
    )
  }
}

export default BooksApp;
