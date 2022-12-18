import React, { Component } from 'react';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";


class Section extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    }

    bookShelfing = () => {
        const { allBooks } = this.props;
        if (allBooks) {
            const stillReading = allBooks.filter(book => book.shelf === "currentlyReading");
            const willRead = allBooks.filter(book => book.shelf === "wantToRead");
            const alreadyRead = allBooks.filter(book => book.shelf === "read");

            this.setState(() => ({
                currentlyReading: stillReading,
                wantToRead: willRead,
                read: alreadyRead
            }))

        }
    }

    handleShelfChange = (bookId, value) => {
        BooksAPI.update(bookId, value)
        .then(() => {
            this.props.refreshShelf();
            this.bookShelfing();
        })
        // this.props.refreshShelf();
        // this.bookShelfing();
    }

    render() {
        const {currentlyReading, wantToRead, read} = this.state;

        return(

            <div className='list-books'>
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div className='bookshelf'>
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className='bookshelf-books'>
                            <ol className='books-grid'>
                                {currentlyReading.map((book) => (
                                    <li key={book.id}>
                                        <BookCard particularBook={book}/>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className='bookshelf'>
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className='bookshelf-books'>
                            <ol className='books-grid'>
                                {wantToRead.map((book) => (
                                    <li key={book.id}>
                                        <BookCard particularBook={book}/>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className='bookshelf'>
                        <h2 className="bookshelf-title">Read</h2>
                        <div className='bookshelf-books'>
                            <ol className='books-grid'>
                                {read.map((book) => (
                                    <li key={book.id}>
                                        <BookCard particularBook={book}/>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
                <Link
                className='open-search'
                to='/search'>
                    Search
                </Link>
            </div>
            
        )
    }
}


export default Section;