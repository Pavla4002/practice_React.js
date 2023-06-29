import React from 'react';
import './App.css';
import HomePage from "./pages/PurchasePage/HomePage/HomePage";
import UserListPage from "./components/profilesComponents/UserListPage";
import TestPage from "./pages/testPage/TestPage";

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
