import PropTypes from "prop-types";

const Book = ({ book, shelves, handleShelfUpdate }) => {

    const getBookThumbnail = (book) => {
        if ('imageLinks' in book) {
            return book.imageLinks.smallThumbnail;
        }
        else {
            return "";
        }

    }

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${getBookThumbnail(book)})`
                    }} />
                <div className="book-shelf-changer">
                    <select value={book.shelf} 
                            onChange={(e) => handleShelfUpdate(book, e.target.value)}>
                        {shelves.map((shelf, index) => {
                            if(shelf.value === book.shelf){
                                return (
                                    <option key={index} value={shelf.value} disabled>
                                        {shelf.title}
                                    </option>
                                );
                            }
                            else{
                                return (
                                    <option key={index} value={shelf.value}>
                                        {shelf.title}
                                    </option>
                                );
                            }
                        })
                    }
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors.map((author, index) => {
                return (
                    <div key={index} className="book-authors">{author}</div>
                )
            })}
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    handleShelfUpdate: PropTypes.func.isRequired
}

export default Book;