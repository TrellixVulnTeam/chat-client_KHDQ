//Packages, Features, etc
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material';

//Css, Images, etc
import './App.css';
import { theme } from './shared/theme'

//Pages
import LoginPage from './pages/LogIn.page';
import HomePage from './pages/Home.page';
import OtherPage from './pages/Other.page';

let name: String = "David";

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/messages' element={<HomePage />} />
          <Route path='/other' element={<OtherPage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
