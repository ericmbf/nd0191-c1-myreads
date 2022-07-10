import PropTypes from "prop-types";
import Book from "./Book";

const BookList = ({ books, shelves, handleShelfUpdate}) => {
    return (
        <div className="books-grid">
            {
                books.length ? books.map((book, index) => {
                    return (<Book 
                                key={index} 
                                book={book} 
                                shelves={shelves} 
                                handleShelfUpdate={handleShelfUpdate}
                                bookShelf={book.shelf}
                            />)
                }) : ""
            }
        </div>
    )
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    handleShelfUpdate: PropTypes.func.isRequired,
}

export default BookList;