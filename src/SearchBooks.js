import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import * as BooksAPI from "./BooksAPI";



class SearchBooks extends Component {

    state = {
        query: '',
        shownBooks: []
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
            // query: query.trim()
        }))
    };

    updateShownBooks = () => {
        BooksAPI.search(this.state.query)
            .then((searchedBooks) => (
                this.setState(() => ({
                    shownBooks: searchedBooks
                }))
            ))
    }

    handleShelfChange = (bookId, value) => {
        BooksAPI.update(bookId, value);
    }

    render() {
        const { query, shownBooks } = this.state;
        // const { books } = this.props;

        return(
            <div>
                <Link
                    className='close-search'
                    to='/'>
                        Close
                </Link>
                <div className='search-books-input-wrapper'>
                    <input
                        className='search-books-bar'
                        type='text'
                        placeholder='Search Contacts'
                        value={query}
                        onChange={(e) => this.updateQuery(e.target.value)}
                    />
                </div>
                <div className='search-books-results'>
                    <ol className='books-grid'>
                        {shownBooks.map((book) => (
                            <li key={book.id}>
                                <BookCard particularBook={book}/>
                            </li>
                        ))}
                    </ol>
                </div>
                
            </div>
        )
    }
}


export default SearchBooks;