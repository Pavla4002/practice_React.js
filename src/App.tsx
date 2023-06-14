import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";
import TestPage from "./pages/TestPage";

function App() {

  return (
    <div className="App">
        <HomePage/>
        <UserListPage/>
        <TestPage/>
    </div>
  );
}

export default App;
