import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Badge, Form, FormControl } from 'react-bootstrap';
import * as Components from "../components";
import { GET } from '../server';
import { Empty } from 'antd';

export const Vaccine = (props) => {
  const [list, setList] = useState([])
  const [data, setData] = useState([])
  const [allData, setAlldata] = useState([])
  const [details, setDetails] = useState({});
  const [isSearch, setSearch] = useState(true);

  useEffect(() => {
      let isLoad = true
      if (isLoad) {
        const fetchData = async () => {
          const res = await GET('/vaccine')
          if (res) {
            setData(res)
            setList(res.data)
            setAlldata(res.data)
          }
        }
        fetchData()
      }
      return () => {
        isLoad = false
      }
  }, [])

  const handleClick = (key, data, idx) => {
    setDetails({key, data, idx })
    props.scrollReset(true)
    setSearch(false)
  }
  const handleClose = (e) =>{
    setDetails({key: e.key, data: e.data })
    setSearch(true)
  }
  const scrollReset = (e) => props.scrollReset(e)

  const handleFilter = e => {
    const value = e.target.value
    setList(value.length > 0 ? list?.filter(i => i.details.toLowerCase().match(value)) : allData)
  }

  return (
    <div className={`app-vaccine ${details.key}`}>
      <div className='app-title-wrap'>
        <Components.Title className="mt-0">
          Covid vaccine list
          <span>Total vaccine - {list?.length > 0 && list?.length}</span>
        </Components.Title>
        {isSearch && (
          <Form.Group className='form-group app-serch-box'>
            <FormControl type="search" placeholder="Search" aria-label="Search" onChange={e=> handleFilter(e)}/>
            <Components.Icon name="search" />
          </Form.Group>
        )}
      </div>
      {!details.key ? 
        <Row>
            {list?.length > 0 ? list?.map((items, idx) => {
              return (
                  <Col md={6} lg={4} key={idx}>
                    <Components.Cards className="card-vaccine-box">
                      <h3><Badge>{idx + 1}</Badge>{items.candidate}</h3>
                      <p><span>Trial Phase:</span>{items.trialPhase}</p>
                      <p className='item-details'>{items.details.substring(12, 125)}...</p>
                      <Button variant='outline-primary' onClick={() => handleClick(true, data, idx)}>
                        More Details
                      </Button>
                    </Components.Cards>
                  </Col>
              )
            }): <Components.Cards className="card-empty"><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></Components.Cards>}
        </Row>
        : <Components.VaccinDetails data={details} handleClose={e => handleClose(e)} scrollReset={(e)=> scrollReset(e)}/>
      }

    </div>
  )
}
