import PropTypes from "prop-types";
import BookList from "./BookList";

const BookShelf = ({ books, title }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <BookList books={books}/>
            </div>
        </div>
    );
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
}

export default BookShelf;