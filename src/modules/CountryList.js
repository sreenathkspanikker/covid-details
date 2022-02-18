import React, { useState, useEffect } from 'react'
import * as Components from "../components";
import { GET } from '../server'
import { Button, Table, Tooltip } from 'antd';
import { Image, Row, Col, Form, FormControl } from 'react-bootstrap';

export const CountryList = () => {
    let [data, setData] = useState([])
    const [allData, setAlldata] = useState([])
    const columns = [
      {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
      },
      {
        title: 'Tests',
        dataIndex: 'tests',
        key: 'tests',
        ellipsis: {
          showTitle: false,
        },
        render: address => (
          <Tooltip placement="topLeft" title={`Total Test: ${address}`}>
            {address}
          </Tooltip>
        ),
      },
      {
        title: 'Cases',
        dataIndex: 'cases',
        key: 'cases',
        ellipsis: {
          showTitle: false,
        },
        render: cases => (
          <Tooltip placement="topLeft" title={`Total Case: ${cases}`}>
            {cases}
          </Tooltip>
        ),
      },
      {
        title: 'Active',
        dataIndex: 'active',
        key: 'active',
        ellipsis: {
          showTitle: false,
        },
        render: active => (
          <Tooltip placement="topLeft" title={`Total Active: ${active}`}>
            {active}
          </Tooltip>
        ),
      },
      {
        title: 'Recovered',
        dataIndex: 'recovered',
        key: 'recovered',
        ellipsis: {
          showTitle: false,
        },
        render: recovered => (
          <Tooltip placement="topLeft" title={`Total Recovered: ${recovered}`}>
            {recovered}
          </Tooltip>
        ),
      },
      {
        title: 'Deaths',
        dataIndex: 'deaths',
        key: 'deaths',
        ellipsis: {
          showTitle: false,
        },
        render: deaths => (
          <Tooltip placement="topLeft" title={`Total Deaths: ${deaths}`}>
            {deaths}
          </Tooltip>
        ),
      },
      {
        title: 'Population',
        dataIndex: 'population',
        key: 'population',
        ellipsis: {
          showTitle: false,
        },
        render: population => (
          <Tooltip placement="topLeft" title={`Total Population: ${population}`}>
            {population}
          </Tooltip>
        ),
      },
    ];

    useEffect(() => {
      let isLoad = true
      if (isLoad) {
        const fetchData = async () => {
          const res = await GET('/countries')
          if (res) {
              const value = res.sort((a, b) => a.cases < b.cases ? 1 : a.cases > b.cases ? -1 : 0)
              setData(value)
              setAlldata(value)
            }
        }
        fetchData()
      }
      return () => {
        isLoad = false
      }
    }, [])

    const handleFilter = e => {
      const value = e.target.value
      setData(value.length > 0 ? data.filter(i => i.country.toLowerCase().match(value)) : allData)
    }

  return (
    <div className='app-data-list-wrap'>
      <div className='app-title-wrap'>
        <Components.Title className="mt-0">Covid case list In all world</Components.Title>
        <Form.Group className='form-group app-serch-box'>
          <FormControl type="search" placeholder="Search" aria-label="Search" onChange={e=> handleFilter(e)}/>
          <Components.Icon name="search" />
        </Form.Group>
      </div>
      <Components.Cards className="app-data-list mt-3"  >
        <Table 
          columns={columns}
          dataSource={data}  
          rowKey={row => row.country} 
          expandable={{
            expandedRowRender: record => (
              <div className='app-exapndable'>
                <h3>
                  <Image src={record.countryInfo.flag} img="flag" /> 
                  <span>
                    <em>{record.country}</em>
                    <small>{record.continent}</small>
                  </span>
                </h3>
                <Row>
                  <Col>
                    <Components.Cards title="Total Updated">
                      <h2>{record.updated}</h2>
                    </Components.Cards>
                  </Col>
                  <Col>
                    <Components.Cards title="Todays Case">
                      <h2>{record.todayCases}</h2>
                    </Components.Cards>
                  </Col>
                  <Col>
                    <Components.Cards title="Todays Death">
                      <h2>{record.todayDeaths}</h2>
                    </Components.Cards>
                  </Col>
                  <Col>
                    <Components.Cards title="Todays Recovered">
                      <h2>{record.todayRecovered}</h2>
                    </Components.Cards>
                  </Col>
                </Row>

              </div>
            ),
            expandIcon: ({ expanded, onExpand, record }) =>
              expanded ? (
                <Button onClick={e => onExpand(record, e)} >
                  <Components.Icon name="minus" />
                </Button>
              ) : (
                <Button onClick={e => onExpand(record, e)}>
                  <Components.Icon name="plus"  />
                </Button>
              )
          }}   
        />
      </Components.Cards>
    </div>
  )
}
