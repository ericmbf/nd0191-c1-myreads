import PropTypes from "prop-types";
import { useState} from 'react';
import { Link } from "react-router-dom";
import Book from "./Book";

const SearchBook = ({ books, shelves, handleShelfUpdate}) => {

    const [query, setQuery] = useState("");
    const [searchBooks, setSearchBooks] = useState([]);

    const checkIncludeQuery = (query, array) => array.some((element) => {
        return element.toLowerCase().includes(query.trim().toLowerCase());
    });

    const handleSearchBookApi = (query) => {
        if (query !== "") {
            BooksAPI.search(query, 20).then((res) => {
                if (res.length) {
                    setSearchBooks(res);
                }
            }, () => setSearchBooks([]));
        }
        else{
            setSearchBooks([]);
        }
        console.log(searchBooks);
    }

    const showingBooks =
        query === "" ?
        [] : books.filter((c) => {
            console.log(c);
            return checkIncludeQuery(query, c.authors) ||
                    checkIncludeQuery(query, 
                        c.industryIdentifiers.map((ident) => ident.identifier)) ||
                    c.title.toLowerCase().includes(query.toLowerCase());
        }
    );

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
        handleSearchBookApi(event.target.value);
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
                    {searchBooks.map((book, index) => {
                        return <Book 
                            key={index}
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
    shelves: PropTypes.array.isRequired,
    handleShelfUpdate: PropTypes.func.isRequired,
}

export default SearchBook;