import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';

export const ModalVaccine = (props) => {
    const [show, setShow] = useState(props.show);

    useEffect(() => {
        let isLoad = true
        if (isLoad) setShow(props.show)
        return () => {
            isLoad = false
        }
    }, [props])
    

    const handleClose = () => props.setShow({show: false, data: {}});

    return (
        <Modal show={show.show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
            <Modal.Title>{show.data?.candidate}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><span>Mechanism:</span>{show.data?.mechanism}</p>
                <p><span>Trial Phase:</span>{show.data?.trialPhase}</p>
                <h3>Sponsors</h3>
                {show.data?.sponsors?.map((items, idx) =><p key={idx}><span>{idx + 1}.</span>{items}</p>)}
                <h3>Institutions</h3>
                {show.data?.institutions?.map((items, idx) =><p key={idx}><span>{idx + 1}.</span>{items}</p>)}
                <h3>Details</h3>
                <p>{show.data?.details}</p>
            </Modal.Body>
        </Modal>
    )
}
