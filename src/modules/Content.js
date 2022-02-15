import React from 'react'
import * as Modules from "../modules";
import * as Components from "../components";
import PerfectScrollbar from 'react-perfect-scrollbar'

export const Content = (props) => {

  const renderMenu = (e) => {
    console.log(e);
    switch (e) {
      case 'Country List':
        return <Modules.CountryList  />
      case 'Vaccine':
        return <Modules.Vaccine  />
      case 'Covid Info':
        return <Modules.CovidInfo  />
      case 'About Me':
        return <Modules.About />
      default:
        return <Modules.TotalCount  />
    }
  }
  
  return (
    <div className='app-content'>
        <Components.Header />
        <div className='app-coponents'>
          <PerfectScrollbar>
            {renderMenu(props.menu)}
          </PerfectScrollbar>
        </div>
    </div>
  )
}
