import React from 'react'
import * as BooksApi from '../BooksAPI';

export default class Book extends React.Component {

    moveBook = (shelf, book) => {
        BooksApi.update(book, shelf).then((result) => {
            this.props.afterUpdateBook();
        })
    }

    render() {
        const { book } = this.props;
        return (
            <li >
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf}
                                onChange={(event) => this.moveBook(event.target.value, book)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors && book.authors[0]}</div>
                </div>
            </li>
        )
    }
}