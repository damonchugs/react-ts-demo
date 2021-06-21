import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './hello/index';
import HookDemo from './HookDemo/index';

interface ColorProps {
  [key: string]: { color: string, background: string }
};

const themes: ColorProps = {
  light: {
    color: '#000',
    background: '#eee'
  },
  dark: {
    color: '#eee',
    background: '#000'
  }
}
const themesKey = 'dark'
// 创建
export const ThemesContext = React.createContext(themes[themesKey])

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Hello message="Hello Damonchu" />
          <Hello />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ThemesContext.Provider value={themes[themesKey]}>
        <HookDemo />
      </ThemesContext.Provider>
    </div>
  );
}

export default App;
