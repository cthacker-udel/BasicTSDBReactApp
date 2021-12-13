import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainPage } from './Components/MainPage';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <>
        <BrowserRouter>
            <MainPage />
        </BrowserRouter>
    </>
  );
}

export default App;
