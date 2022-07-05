import PropTypes from "prop-types";
import Book from "./Book";

const BookList = ({ books }) => {
    return (
        <ol className="books-grid">
            {
                books.length && books.map((book, index) => {
                    return (<Book index={index} book={book} />)
                })
            }
        </ol>
    )
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
}

export default BookList;