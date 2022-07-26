import './App.css';
import { useState } from 'react';
import nameContext from './NameContext';
import setNameContext from './SetNameContext';
import lastnameContext from './lastNameContext';
import setLastNameContext from './setLastNameContext';
import ThemeContext from './ThemeContext';
import SetThemeContext from './SetThemeComtext';
import Main from './Main';


function App() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("")
  const [theme, setTheme] = useState(false);
  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        <nameContext.Provider value={name}>
          <lastnameContext.Provider value={lastName}>
            <setNameContext.Provider value={setName}>
              <setLastNameContext.Provider value={setLastName}>
               <Main />
              </setLastNameContext.Provider>
            </setNameContext.Provider>
          </lastnameContext.Provider>
        </nameContext.Provider>
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
