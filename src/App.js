import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import Section from './Section';

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  refreshShelf = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  };

  render() {

    // if (this.state.books){
    //   this.shelfBooks(this.state.books);
    // }
    return (
      <div className="app">
        <Routes>
          <Route exact path='/' render={() => (
            <Section
              allBooks={this.state.books}
              refreshShelf={this.refreshShelf}
            />
          )} />

          <Route path='/search' render={() => (
            <SearchBooks />
          )} />
        </Routes>
        {/* <Route exact path='/' render={() => (
          <Section
              allBooks={this.state.books}
              refreshShelf={this.refreshShelf}
          />
        )} />

        <Route path='/search' render={() => (
          <SearchBooks allBooks={this.state.books}/>
        )} />
           */}
      </div>
    )
  }
}

export default BooksApp;
