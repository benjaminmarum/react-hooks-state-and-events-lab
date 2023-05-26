import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [mode, setMode] = useState(false);

  const setTheme = () => {
    setMode(!mode);
  };

  function modeButton() {
    if (mode) {
      return (<button onClick={() => { setMode(!mode) }}>Dark Mode</button>)
    } else {
      return (<button onClick={setTheme}>Light Mode</button>)
    }
  }


  const appClass = mode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {mode ?
          <button onClick={() => { setMode(!mode) }}>Dark Mode</button>
          :
          <button onClick={setTheme}>Light Mode</button>
        }
        {/* {modeButton()} */}
      </header>
      <ShoppingList items={itemData}/>
    </div>
  );
}

export default App;
