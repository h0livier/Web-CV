import { Stack, Figure, Button, Col } from "react-bootstrap";
import ResumeValues from '@assets/resume.json'
import logo from '@assets/react.svg'
 
export default function Navigation(){

    return(
        <Col className="p-2 w-25">
            <Stack className="d-flex justify-content-center align-items-center">
                <Figure className="p-3">
                    <Figure.Image
                        className="rounded-start rounded-bottom p-3"
                        width={250}
                        height={300}
                        alt="me"
                        src={logo}
                    />
                    <Figure.Caption className="text-light fs-2 text-center">
                        {ResumeValues.full_name}
                    </Figure.Caption>
                </Figure>
                <div className="py-4">
                    {ResumeValues.accounts.map(item =>
                        <a href={item.link}><i className={item.icon + " fs-1 mx-3 text-light"}></i></a>
                    )}
                </div>
            </Stack>
        </Col>
    )

}