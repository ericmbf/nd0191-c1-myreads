import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

const MyBooks = ({ books, shelves}) => {

    const getBooksFromShelf = ((books, shelf) => {
        if (books.length) {
            return books.filter((book) => book.shelf === shelf);
        }
        else {
            return [];
        }
    })

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {shelves.map((shelf, index) => {
                    return (<BookShelf
                        key={index}
                        books={getBooksFromShelf(books, shelf.value)}
                        title={shelf.title} 
                    />);
                })}
            </div>
            <div className="open-search">
                <Link
                    to={"/search"}
                    className={"open-search"}
                />
            </div>
        </div>
    );
}

MyBooks.propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
}

export default MyBooks;