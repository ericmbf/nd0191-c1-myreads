import PropTypes from "prop-types";
import { useState} from 'react';
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../utils/BooksAPI"

const SearchBook = ({ booksFromUser, shelves, handleShelfUpdate }) => {

    const [query, setQuery] = useState("");
    const [searchBooks, setSearchBooks] = useState([]);

    const getAuthorsFromBook = book => {
        return 'authors' in book ? book.authors : [];
    }

    const getIndetifiersFromBook = book => {
        return 'industryIdentifiers' in book ? 
        book.industryIdentifiers.map((ident) => ident.identifier) : [];
    }

    const checkIncludeQuery = (query, array) => array.some((element) => {
        return element.toLowerCase().includes(query.trim().toLowerCase());
    });

    const handleSearchBookApi = (query) => {
        if (query !== "") {
            BooksAPI.search(query.trim().toLowerCase(), 20).then((res) => {
                if (res.length) {
                    setSearchBooks(res);
                }
            }, () => setSearchBooks([]));
        }
        else{
            setSearchBooks([]);
        }
    }

    const showingBooks =
        query === "" ?
        [] : searchBooks.filter((book) => {
            return checkIncludeQuery(query, getAuthorsFromBook(book)) ||
                    checkIncludeQuery(query, getIndetifiersFromBook(book)) ||
                    book.title.toLowerCase().includes(query.toLowerCase());
        }
    );

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
        handleSearchBookApi(event.target.value);
    }

    const getShelfBook = (book) => {
        let bookList = booksFromUser.filter((bookUser) => bookUser.id === book.id);
        return bookList.length ? bookList[0].shelf : "none";
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to="/"
                />
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={query}
                        onChange={(e) => handleQueryChange(e)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                  <ol className="books-grid">
                    {showingBooks.map((book, index) => {
                        return <Book 
                            key={index}
                            book={book} 
                            shelves={shelves} 
                            handleShelfUpdate={handleShelfUpdate}
                            bookShelf={getShelfBook(book)}
                            />
                    })}
                </ol>
            </div>
        </div>
    );
}

SearchBook.propTypes = {
    booksFromUser: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    handleShelfUpdate: PropTypes.func.isRequired,
}

export default SearchBook;