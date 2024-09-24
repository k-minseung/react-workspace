import logo from './logo.svg';
import './App.css';
import React,{useContext} from 'react';
import ThemeContext from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';



function App() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div style={{
      backgroundColor: isDarkMode ? '#333' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',}}>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
