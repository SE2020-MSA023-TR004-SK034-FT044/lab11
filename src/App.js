import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './Componenets/Login/Login';
import { Route, Routes } from "react-router-dom";
import Register from './Componenets/Register/Register';

function App() {
  const theme = createTheme();


  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <Routes>

          <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} />


        </Routes>
        {/* 
        <Login /> */}

      </ThemeProvider>

    </div>
  );
}

export default App;
