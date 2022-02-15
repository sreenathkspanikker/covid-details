import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Badge } from 'react-bootstrap';
import * as Components from "../components";
import { GET } from '../server';

export const Vaccine = () => {
  const [data, setData] = useState([])
  const [details, setDetails] = useState({});

  const handleClick = (key, data, idx) => setDetails({key, data, idx })
  const handleClose = (e) => setDetails({key: e.key, data: e.data })

  useEffect(() => {
      let isLoad = true
      if (isLoad) {
        const fetchData = async () => {
          const res = await GET('/vaccine')
          if (res) setData(res)
        }
        fetchData()
      }
      return () => {
        isLoad = false
      }
  }, [])

  return (
    <div className={`app-vaccine ${details.key}`}>
      <Components.Title className="mt-0">Covid vaccine list</Components.Title>
      {!details.key ? 
        <Row>
            {data?.data?.map((items, idx) => {
              return (
                  <Col sm={4} key={idx}>
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
            })}
        </Row>
        : <Components.VaccinDetails data={details} handleClose={e => handleClose(e)}/>
      }

    </div>
  )
}
