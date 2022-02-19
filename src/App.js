import React, { useState, useEffect, createContext } from 'react'
import { getDtaInfo, getVaccineInfo, getCountryInfo } from './redux'
import { useSelector, useDispatch } from 'react-redux'
import * as Components from "./components";
import * as Modules from "./modules";

const MyContext = createContext()

function App() {
  const [menu, setMenu] = useState('')
  const dispatch = useDispatch()
  const data = {
    chart: useSelector(state => state.covidData.data),
    vaccine: useSelector(state => state.vaccineData.data),
    country: useSelector(state => state.countryData.data)
  }

  useEffect(() => {
    dispatch(getDtaInfo())
    dispatch(getVaccineInfo())
    dispatch(getCountryInfo())
  }, [dispatch])


  const handleChange = e => setMenu(e)
  
  return (
    <MyContext.Provider value={data}>
      <div className="App">
        <Components.Sidebar handleChange={(e)=> handleChange(e)}/>
        <Modules.Content menu={menu}/>
        <Components.Footer handleChange={(e)=> handleChange(e)}/>
      </div>
    </MyContext.Provider>
  );
}

export default App;

export { MyContext }
