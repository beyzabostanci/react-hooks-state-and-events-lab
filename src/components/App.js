import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false)//açık modu direkt göstermesi için

  function handleDarkMode(){
    setDarkMode((darkMode)=>!darkMode);//açık modu direkt gösterdiği için burada kapalısını göstermek için fonksiyon
  }
  const appClass = darkMode ? "App dark" : "App light" //darkMode sa app dark değilse app light göster. false darkmode la değiştirildi darkmode toggle olabilir

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>  {darkMode ? "Dark" : "Light"} Mode  </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
