import React, { useState, useEffect } from 'react'
import * as Components from "../components";
import { GET } from '../server'
import {  Row, Col } from 'react-bootstrap';


export const TotalCount = (props) => {
    const [data, setData] = useState({})
    const [sumPerc, setSumperc] = useState('')
    const [deathPerc, setDeathperc] = useState('')
    const [recoveredPerc, setRecoveredperc] = useState('')
    const [todaycasePerc, setTodatcaseperc] = useState('')
    const [todayerecoveredPerc, setTodayrecoveredperc] = useState('')
    const [todayDeathsPerc, setTodaydeathsperc] = useState('')

    const [criticalPerc, setCriticaperc] = useState('')
    const [activePerc, setActiveperc] = useState('')
    const [affectedCountries, setAffectedcountriesperc] = useState('')

    useEffect(() => {
      let isLoad = true
      if (isLoad) {
        const fetchData = async () => {
            const res = await GET('/all')
            if (res) {
                setData(res)
                setSumperc((res.cases * 100  / res.testsPerOneMillion ).toString().slice(0, 2));
                setDeathperc(res.deaths * 100 / res.active)
                setRecoveredperc((res.recovered * 100 / res.active).toString().slice(0, 2))
                setTodatcaseperc((res.todayCases * 100 / res.casesPerOneMillion).toString().slice(0, 2))
                setTodayrecoveredperc((res.todayRecovered * 100 / res.casesPerOneMillion).toString().slice(0, 2))
                setTodaydeathsperc((res.todayDeaths * 100 / res.casesPerOneMillion).toString().slice(0, 2))
                
                setCriticaperc((res.critical * 100 / res.active).toString().slice(0, 2))
                setActiveperc((res.active * 100 / res.tests).toString().slice(0, 2))
                setAffectedcountriesperc((res.affectedCountries * 100 / 195 ).toString().slice(0, 2))
            }
          }
          fetchData()
      }
      return () => {
        isLoad = false
      }
    }, [props])


  return (
    <React.Fragment>
      <Components.Title className="mt-0">Covid toatal case details</Components.Title>
      <Row>
          <Col sm={4}>
            <Components.Cards className="app-total-count">
                <div className='chart-content'>
                    <h3>
                        <span>Total Cases</span>{data.cases}
                    </h3>
                    <Components.Cahrt textColor="#6655fe" pathColor="#6655fe" percent={sumPerc}/>
                </div>
            </Components.Cards>
          </Col>
          <Col sm={4}>
            <Components.Cards className="app-total-count">
                <div className='chart-content'>
                    <h3>
                        <span>Total Recovered</span>{data.recovered }
                    </h3>
                    <Components.Cahrt textColor='#b423c1' pathColor='#b423c1' percent={recoveredPerc}/>
                </div>
            </Components.Cards>
          </Col>
          <Col sm={4}>
            <Components.Cards className="app-total-count">
                <div className='chart-content'>
                    <h3>
                        <span>Total Death</span>{data.deaths }
                    </h3>
                    <Components.Cahrt textColor='#9433f0' pathColor='#9433f0' percent={deathPerc}/>
                </div>
            </Components.Cards>
          </Col>
          <Col sm={4}>
            <Components.Cards className="app-total-count">
                <div className='chart-content'>
                    <h3>
                        <span>Today Cases</span>{data.todayCases}
                    </h3>
                    <Components.Cahrt textColor="#f69b2f" pathColor="#f69b2f" percent={todaycasePerc}/>
                </div>
            </Components.Cards>
          </Col>
          <Col sm={4}>
            <Components.Cards className="app-total-count">
                <div className='chart-content'>
                    <h3>
                        <span>Today Recovered</span>{data.todayRecovered }
                    </h3>
                    <Components.Cahrt textColor='#3fb0ef' pathColor='#3fb0ef' percent={todayerecoveredPerc}/>
                </div>
            </Components.Cards>
          </Col>
          <Col sm={4}>
            <Components.Cards className="app-total-count">
                <div className='chart-content'>
                    <h3>
                        <span>Today Death</span>{data.todayDeaths }
                    </h3>
                    <Components.Cahrt textColor='#50d8a7' pathColor='#50d8a7' percent={todayDeathsPerc}/>
                </div>
            </Components.Cards>
          </Col>


          <Col sm={4}>
            <Components.Cards className="app-total-count">
                <div className='chart-content'>
                    <h3>
                        <span>Critical</span>{data.critical}
                    </h3>
                    <Components.Cahrt textColor="#5fff62" pathColor="#5fff62" percent={criticalPerc}/>
                </div>
            </Components.Cards>
          </Col>
          <Col sm={4}>
            <Components.Cards className="app-total-count">
                <div className='chart-content'>
                    <h3>
                        <span>Active</span>{data.active }
                    </h3>
                    <Components.Cahrt textColor='#ff6191' pathColor='#ff6191' percent={activePerc}/>
                </div>
            </Components.Cards>
          </Col>
          <Col sm={4}>
            <Components.Cards className="app-total-count">
                <div className='chart-content'>
                    <h3>
                        <span>population</span>{data.population }
                    </h3>
                    <Components.Cahrt textColor='#e21313' pathColor='#e21313' percent={100}/>
                </div>
            </Components.Cards>
          </Col>
          <Col sm={4}>
            <Components.Cards className="app-total-count">
                <div className='chart-content'>
                    <h3>
                        <span>Affected Countries</span>{data.affectedCountries }
                    </h3>
                    <Components.Cahrt textColor='#ffee5f' pathColor='#ffee5f' percent={affectedCountries}/>
                </div>
            </Components.Cards>
          </Col>

      </Row>
    </React.Fragment>
  )
}
