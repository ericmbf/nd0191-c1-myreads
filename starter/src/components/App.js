import "../css/App.css";
import { useEffect, useState } from "react";
import SearchBooks from "./SearchBook"
import MyBooks from "./MyBooks"
import { Route, Routes } from 'react-router-dom';
import * as BooksAPI from "../utils/BooksAPI"

function App() {

  const shelves = [
    {
      value: "none",
      title: "None",
    },
    {
      value: "currentlyReading",
      title: "Currently Reading",
    },
    {
      value: "wantToRead",
      title: "Want to Read",
    },
    {
      value: "read",
      title: "Read",
    },
  ];

  const [booksFromUser, setAllBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((res) => setAllBooks(res));
  }, [booksFromUser]);

  const handleShelfUpdate = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      const allbookChanged = booksFromUser.map(b => {
        if (b.id === book.id) {
          return { ...b, shelf: newShelf };
        }
        else {
          return b;
        }
      })

      setAllBooks(allbookChanged);
    })
  }

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<MyBooks
          books={booksFromUser}
          shelves={shelves}
          handleShelfUpdate={handleShelfUpdate}
        />}
      />
      <Route
        path="/search"
        element={<SearchBooks
          booksFromUser={booksFromUser}
          shelves={shelves}
          handleShelfUpdate={handleShelfUpdate}
        />}
      />
    </Routes>
  );
}

export default App;
