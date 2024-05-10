import { useEffect, useState } from 'react'
import ResumeValues from '@assets/resume.json'
import StackRow from './stacks/stack-row'
import Navigation from './navigation/navigation'
import { Button, Col, Row } from 'react-bootstrap'

export function PresentationStack(){

    const titleValues = ResumeValues.title_values
    const [titlePos, setTitlePos] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setTitlePos(titlePos === titleValues.length - 1 ? 0 : titlePos+1)
        }, 3000)
    }, [titlePos])

    return(
        <StackRow>
            <Row>
                <Navigation />
                <Col className='w-50'>
                    <h1 className='fs-6'>Hello I'm <span className='text-primary'>{titleValues[titlePos]}</span></h1>
                    <h2 className='fs-1 mt-4'>I am a Software Developer with interest in <span className='text-primary fw-bold rounded-3 p-0'>DevOps</span> based near Brussels</h2>
                    <p className='mt-4'>After the end of my studies I mainly worked as a consultant in different enterprises. I've had multiple roles during my years of experience as a developer, devops and consultant. </p>
                    <div className='mt-5 d-flex'>
                        <div className='d-flex pe-5'>
                            <p className='pe-3 fs-1'>50</p>
                            <p>completed<br />projects</p>
                        </div>
                        <div className='d-flex'>
                            <p className='pe-3 fs-1'>50</p>
                            <p>complete<br />projects</p>
                        </div>
                    </div>
                    <div className="pt-3">
                        <Button variant="primary" className="me-3">Contact me</Button>
                        <Button variant="primary">Download CV</Button>
                    </div>
                </Col>
            </Row>
        </StackRow>
    )
}