import React, { Component } from 'react';
import BookCard from './BookCard',



class Section extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    }

    bookshelfing = () => {

    }

    render() {
        const {currentlyReading, wantToRead, read} = this.state;

        return(
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
        )
    }
}


export default Section;