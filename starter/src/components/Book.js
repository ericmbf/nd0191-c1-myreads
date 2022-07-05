import PropTypes from "prop-types";
const Book = ({index, book}) => {
    let urlBook = book.imageLinks.smallThumbnail;
    return (
        <li key={index} className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${urlBook})`
                    }}/>
                <div className="book-shelf-changer">
                    <select>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors.map((author) => {
                return (
                    <div className="book-authors">{author}</div>
                )
            })}
        </li>
    );
}

Book.propTypes = {
    index: PropTypes.number.isRequired,
    book: PropTypes.object.isRequired,
}

export default Book;