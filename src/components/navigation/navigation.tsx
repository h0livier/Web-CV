import { Col, Stack, Figure, Button } from "react-bootstrap";
import ResumeValues from '@assets/resume.json'
import logo from '@assets/react.svg'
 
export default function Navigation(){

    return(
        <Col className="bg-primary" xs="12" md="4">
            <Stack className="d-flex justify-content-center align-items-center">
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={logo}
                    />
                    <Figure.Caption>
                        {ResumeValues.full_name}
                    </Figure.Caption>
                </Figure>
                <div>
                    {ResumeValues.accounts.map(item =>
                        <a href={item.link}><i className={item.icon}></i></a>
                    )}
                </div>
                <div>
                    <Button>Contact me</Button>
                    <Button>Download CV</Button>
                </div>
            </Stack>
        </Col>
    )

}