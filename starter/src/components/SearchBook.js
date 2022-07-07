import PropTypes from "prop-types";
import { useState} from 'react';
import { Link } from "react-router-dom";
import Book from "./Book";

const SearchBook = ({ books, shelves, handleShelfUpdate}) => {

    const [query, setQuery] = useState("");

    const checkIncludeQuery = (query, array) => array.some((element) => {
        return element.toLowerCase().includes(query.trim().toLowerCase());
    });

    const showingBooks =
        query === "" ?
        books : books.filter((c) => {
            console.log(c);
            return checkIncludeQuery(query, c.authors) ||
                    checkIncludeQuery(query, 
                        c.industryIdentifiers.map((ident) => ident.identifier)) ||
                    c.title.toLowerCase().includes(query.toLowerCase());
        }
    );

    const handleQuery = (event) => {
        setQuery(event.target.value);
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
                        onChange={(e) => handleQuery(e)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {showingBooks.map((book, index) => {
                        return <Book 
                            index={index}
                            book={book} 
                            shelves={shelves} 
                            handleShelfUpdate={handleShelfUpdate}
                            />
                    })}
                </ol>
            </div>
        </div>
    );
}

SearchBook.propTypes = {
    books: PropTypes.array.isRequired,
    handleShelfUpdate: PropTypes.func.isRequired,
}

export default SearchBook;