import { useEffect, useState } from 'react'
import ResumeValues from '@assets/resume.json'
import StackRow from './stacks/stack-row'

export function PresentationStack(){

    const titleValues = ResumeValues.title_values
    const [titlePos, setTitlePos] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            console.log(titlePos)
            setTitlePos(titlePos === titleValues.length - 1 ? 0 : titlePos+1)
        }, 3000)
    }, [titlePos])

    return(
        <StackRow>
            <div>
                <h1>Hello I'm <span>{titleValues[titlePos]}</span></h1>
                <h2>I am a Software Developer with interest in Devops based near Brussels</h2>
                <p>After the end of my studies I mainly worked as a consultant in different enterprises. I've had multiple roles during my years of experience as a developer, devops and consultant. </p>
                <div>
                    <div>
                        <p>50</p>
                        <p>completed projects</p>
                    </div>
                    <div>
                        <p>2</p>
                        <div>years of experiences</div>
                    </div>
                </div>
            </div>
        </StackRow>
    )
}