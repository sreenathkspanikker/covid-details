import React, { useState } from 'react'
import * as Components from "./components";
import * as Modules from "./modules";

function App() {
  const [menu, setMenu] = useState('')

  const handleChange = e => setMenu(e)
  
  return (
    <div className="App">
        <Components.Sidebar handleChange={(e)=> handleChange(e)}/>
        <Modules.Content menu={menu}/>
        <Components.Footer handleChange={(e)=> handleChange(e)}/>
    </div>
  );
}

export default App;
