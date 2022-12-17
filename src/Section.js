import React, { Component } from 'react';
import BookCard from './BookCard';


class Section extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    }

    bookShelfing = () => {
        const { books } = this.props;
        if (books) {
            const stillReading = books.filter(book => book.shelf === "currentlyReading");
            const willRead = books.filter(book => book.shelf === "wantToRead");
            const alreadyRead = books.filter(book => book.shelf === "read");

            this.setState(() => ({
                currentlyReading: stillReading,
                wantToRead: willRead,
                read: alreadyRead
            }))

        }
    }

    render() {
        const {currentlyReading, wantToRead, read} = this.state;

        return(
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
        )
    }
}


export default Section;