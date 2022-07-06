import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

const MyBooks = ({ books }) => {

    const [shelfList, setSheves] = useState([]);

    useEffect(() => {
        let shelves = [];
        
        books.forEach(book => {
            if(shelves.indexOf(book.shelf) === -1){
                shelves.push(book.shelf);
            }
        });

        setSheves(shelves);
    }, [books]);

    const getBooksFromShelf = ((books, shelf) => {
        if(books.length){
            return books.filter((book) => book.shelf === shelf);
        }
        else{
            return [];
        }
    })

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf
                    books={getBooksFromShelf(books, shelfList[0])}
                    title={"Currently Reading"} />
                <BookShelf
                    books={getBooksFromShelf(books, shelfList[1])}
                    title={"Want to Read"} />
                <BookShelf
                    books={getBooksFromShelf(books, shelfList[2])}
                    title={"Read"} />
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
}

export default MyBooks;