import { useEffect, useState } from 'react'
import ResumeValues from '@assets/resume.json'
import StackRow from './stacks/stack-row'
import {Button, Col, Figure, Row, Stack} from 'react-bootstrap'
import logo from "@assets/react.svg";
import {forEach} from "react-bootstrap/ElementChildren";

export function PresentationStack(){

    const titleValues = ResumeValues.title_values
    const [titlePos, setTitlePos] = useState(0)
    const [label, setLabel] = useState('')
    const [titleLetterIndex, setTitleLetterIndex] = useState(0)
    const [addLetters, setAddLetters] = useState(false)

    /*
    useEffect(() => {
        setTimeout(() => {
            const value = titleValues[titlePos]
            if(!(titleLetterIndex < value.length)) setAddLetters(true)
            //console.log(addLetters && titleLetterIndex === 0)
            if(addLetters && titleLetterIndex === 0){
              //  console.log(titlePos === titleValues.length - 1 ? 0 : titlePos+1)
                setTitlePos(titlePos === titleValues.length - 1 ? 0 : titlePos+1)
            }
            if(!addLetters){
                setTitleLetterIndex(titleLetterIndex+1)
            }else{
                setTitleLetterIndex(titleLetterIndex-1)
            }
            setLabel(titleValues[titlePos].substring(0, titleLetterIndex))
            console.log(titlePos)
            //console.log(titleLetterIndex)
        }, 125)
    }, [titleLetterIndex])*/

    useEffect(() => {
        const value = titleValues[titlePos]
        setTimeout(() => {}, 1000)
    }, [titlePos]);

    return(
        <StackRow>
            <Row className="d-flex align-items-center w-100">
                <Col className="p-2" xs={12} md={6} xl={3}>
                    <Stack className="d-flex justify-content-center align-items-center">
                        <Figure className="p-3">
                            <Figure.Image
                                className="rounded-start rounded-bottom p-3"
                                width={250}
                                height={300}
                                alt="me"
                                src={logo}
                            />
                        </Figure>
                        <div className="py-4">
                            {ResumeValues.accounts.map(item =>
                                <a href={item.link}><i className={item.icon + " fs-2 mx-3 text-stack"}></i></a>
                            )}
                        </div>
                    </Stack>
                </Col>
                <Col className='text-xs-center' xs={12} md={6} xl={9} xxl={9}>
                    <h1 className='fs-6'>Hello I'm <span className='text-primary border-end'>{label}</span></h1>
                    <h2 className='fs-1 mt-4'>{ResumeValues.full_name}</h2>
                    <p className='mt-4'>I am a Software Developer with interest in <span className='text-primary fw-bold rounded-3 p-0'>DevOps</span> based near Brussels<br />After the end of my studies I mainly worked as a consultant in different enterprises. I've had multiple roles during my years of experience as a developer, devops and consultant. </p>
                    <div className="pt-3">
                        <Button variant="primary" className="me-3">Contact me</Button>
                        <Button variant="primary">Download CV</Button>
                    </div>
                </Col>
            </Row>
        </StackRow>
    )
}