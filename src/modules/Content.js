import React, { useRef } from 'react'
import * as Modules from "../modules";
import PerfectScrollbar from 'react-perfect-scrollbar'

export const Content = (props) => {
  const ps = useRef()
  
  const scrollReset = e => {
    const curr = ps.current
    if (curr && e)  ps.current.scrollTop = 0
  }

  const renderMenu = (e) => {
    switch (e) {
      case 'list':
        return <Modules.CountryList  />
      case 'vaccine':
        return <Modules.Vaccine scrollReset={e => scrollReset(e)} />
      case 'info':
        return <Modules.CovidInfo  />
      case 'about':
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
