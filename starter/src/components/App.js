import "../css/App.css";
import { useState } from "react";
import SearchBooks from "./SearchBook"
import MyBooks from "./MyBooks"
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<MyBooks />}
      />
      <Route
        path="/search"
        element={<SearchBooks />} />
    </Routes>
  );
}

export default App;
