import "../css/App.css";
import { useEffect, useState } from "react";
import SearchBooks from "./SearchBook"
import MyBooks from "./MyBooks"
import { Route, Routes } from 'react-router-dom';
import * as BooksAPI from "../utils/BooksAPI"

function App() {

  const [allbooks, setAllBooks] = useState([]);
  
  useEffect(() => {
    BooksAPI.getAll().then((res) => setAllBooks(res));
  }, []);

  const shelves = [
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
    {
      value: "none",
      title: "None",
    },
  ];

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<MyBooks books={allbooks} shelves={shelves}/>}
      />
      <Route
        path="/search"
        element={<SearchBooks books={allbooks} shelves={shelves}/>} 
      />
    </Routes>
  );
}

export default App;
