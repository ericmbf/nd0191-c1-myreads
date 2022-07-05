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

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<MyBooks books={allbooks}/>}
      />
      <Route
        path="/search"
        element={<SearchBooks />} />
    </Routes>
  );
}

export default App;
