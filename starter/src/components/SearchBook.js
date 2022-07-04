import PropTypes from "prop-types";
import { useState } from 'react';
import { Link } from "react-router-dom";
import serializeForm from "form-serialize";

const SearchBook = ({ }) => {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a
                    className="close-search"
                // onClick={() => setShowSearchpage(!showSearchPage)}
                >
                    Close
                </a>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid"></ol>
            </div>
        </div>
    );
}

SearchBook.propTypes = {
    // createContact: PropTypes.func.isRequired,
}

export default SearchBook;