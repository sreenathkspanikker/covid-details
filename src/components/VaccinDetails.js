import React, { useEffect, useState } from 'react'
import { Button, Tooltip, OverlayTrigger, ButtonGroup, Badge } from 'react-bootstrap';
import * as Components from "./";

export const VaccinDetails = (props) => {
    const { data } = props
    const [lastIndex, setLastindex] = useState({})
    const [details, setDetails] = useState([])
    const [vaccineData, setData] = useState([])
    const [idx, setIdx] = useState({})

    useEffect(() => {
        let isLoad = true
        if (isLoad) {
            setIdx(data?.idx)
            setData(data?.data)
            setLastindex(data?.data?.data.length - 1)
            setDetails(data?.data?.data.filter((items, i) => i === data?.idx && items))
        }
        return () => {
            isLoad = false
        }
    }, [data])
    
    const handleClose = () => {
        props.handleClose({key: false, data: {}, idx: null })
        props.scrollReset(true)  
    }

    const handleNav = (e) => {
        const value = e === 0 ? 0 : e
        setIdx(value)
        setDetails(vaccineData?.data.filter((items, i) => i === value && items))
        props.scrollReset(true)        
    }

    return (
        <Components.Cards 
        className="ap-caacine-details">
            {details?.map((item, i) => {
                return (
                    <div key={i}>
                        <h2>
                            <span className='text-wrap'>
                                <Badge>{idx + 1}</Badge>{item.candidate}
                            </span>
                            <OverlayTrigger  
                                placement="bottom" 
                                delay={{ show: 250, hide: 400 }}  
                                overlay={<Tooltip>Close / Back to Vaccine List</Tooltip>}>
                                <Button variant='closes' onClick={handleClose}>
                                    <Components.Icon name="close" />
                                </Button>
                            </OverlayTrigger>
                        </h2>
                        <h3>Mechanism</h3>
                        <p>{item.mechanism}</p>
                        <h3>Trial Phase</h3>
                        <p>{item.trialPhase}</p>
                        <h3>Sponsors</h3>
                        {item.sponsors?.map((items, idx) =><p key={idx}><span>{idx + 1}.</span>{items}</p>)}
                        <h3>Institutions</h3>
                        {item.institutions?.map((items, idx) =><p key={idx}><span>{idx + 1}.</span>{items}</p>)}
                        <h3>Details</h3>
                        <p>{item?.details?.substring(12)}</p>
                    </div>
                )
            })}
            <ButtonGroup aria-label="Prev Next">
                <OverlayTrigger  
                    placement="top" 
                    delay={{ show: 250, hide: 400 }}  
                    overlay={<Tooltip>Click to view previos vaccine details</Tooltip>}
                >
                    <Button variant='link prev' onClick={() => handleNav(idx - 1)} disabled={idx === 0}>
                        <Components.Icon name="arrow-left" />
                        <span>Prev</span>
                    </Button>
                </OverlayTrigger>

                <OverlayTrigger  
                    placement="top" 
                    delay={{ show: 250, hide: 400 }}  
                    overlay={<Tooltip>Click to view next vaccine details</Tooltip>}
                >
                    <Button variant='link next' onClick={() => handleNav(idx + 1)} disabled={idx === lastIndex}>
                        <span>Next</span>
                        <Components.Icon name="arrow-left" />
                    </Button>
                </OverlayTrigger>
            </ButtonGroup>

        </Components.Cards>
    )
}
