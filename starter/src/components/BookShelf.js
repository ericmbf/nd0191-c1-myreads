import PropTypes from "prop-types";
import BookList from "./BookList";

const BookShelf = ({ books, title, shelves, handleShelfUpdate}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <BookList 
                books={books} 
                shelves={shelves} 
                handleShelfUpdate={handleShelfUpdate}/>
            </div>
        </div>
    );
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    shelves: PropTypes.array.isRequired,
    handleShelfUpdate: PropTypes.func.isRequired,
}

export default BookShelf;