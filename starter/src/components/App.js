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

  const [allbooks, setAllBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((res) => setAllBooks(res));
  }, []);

  const handleShelfUpdate = (bookChanged, newShelf) => {
    BooksAPI.update(bookChanged, newShelf).then(() => {
      const allbookChanged = allbooks.map(book => {
        if (book.id === bookChanged.id) {
          return { ...book, shelf: newShelf };
        }
        else {
          return book;
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
          books={allbooks}
          shelves={shelves}
          handleShelfUpdate={handleShelfUpdate}
        />}
      />
      <Route
        path="/search"
        element={<SearchBooks
          books={allbooks}
          shelves={shelves}
          handleShelfUpdate={handleShelfUpdate}
        />}
      />
    </Routes>
  );
}

export default App;
