import PropTypes from "prop-types";
import { useState} from 'react';
import { Link } from "react-router-dom";
import Book from "./Book";

const SearchBook = ({ books }) => {

    const [query, setQuery] = useState("");

    const showingBooks =
        query === "" ?
            books : books.filter((c) =>
                c.title.toLowerCase().includes(query.toLowerCase())
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
                    {showingBooks.map((book) => {
                        return <Book book={book}/>
                    })}
                </ol>
            </div>
        </div>
    );
}

SearchBook.propTypes = {
    books: PropTypes.array.isRequired,
}

export default SearchBook;