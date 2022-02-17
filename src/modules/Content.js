import React, { useRef } from 'react'
import * as Modules from "../modules";
// import * as Components from "../components";
import PerfectScrollbar from 'react-perfect-scrollbar'

export const Content = (props) => {
  const ps = useRef()
  
  const scrollReset = e => {
    const curr = ps.current
    if (curr && e)  ps.current.scrollTop = 0
  }

  const renderMenu = (e) => {
    console.log(e);
    switch (e) {
      case 'Country List':
        return <Modules.CountryList  />
      case 'Vaccine':
        return <Modules.Vaccine scrollReset={e => scrollReset(e)} />
      case 'Covid Info':
        return <Modules.CovidInfo  />
      case 'About Me':
        return <Modules.About />
      default:
        return <Modules.TotalCounts  />
    }
  }
  
  return (
    <div className='app-content'>
        {/* <Components.Header/> */}
        <div className='app-coponents'>
          <PerfectScrollbar containerRef={el => (ps.current = el)}>
            {renderMenu(props.menu)}
          </PerfectScrollbar>
        </div>
    </div>
  )
}
