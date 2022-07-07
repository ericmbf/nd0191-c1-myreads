import PropTypes from "prop-types";

const Book = ({ book, shelves, handleShelfUpdate, bookShelf }) => {

    const getBookThumbnail = (book) => {
        if ('imageLinks' in book) {
            return book.imageLinks.smallThumbnail;
        }
        else {
            return "";
        }
    }

    const ShowAuthors = () => {
        return (
            book.authors.map((author, index) => {
                return (
                    <div key={index} className="book-authors">
                        {author}
                    </div>
                );
            })
        );
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
                    <select value={bookShelf}
                        onChange={(e) => handleShelfUpdate(book, e.target.value)}>
                        
                        <option value={shelves[0].value} disabled>
                            {bookShelf === "none" ? "Add to..." : "Move to... "}
                        </option>

                        {shelves.map((shelf, index) => {
                            if ((bookShelf !== "none") || 
                                (shelf.value !== "none")) {
                                return (
                                    <option key={index} value={shelf.value}>
                                        {shelf.title}
                                    </option>
                                );
                            }
                            else{
                                return null;
                            }
                        })
                        }
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            {('authors' in book) && <ShowAuthors />}
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    handleShelfUpdate: PropTypes.func.isRequired,
    bookShelf: PropTypes.string.isRequired
}

export default Book;