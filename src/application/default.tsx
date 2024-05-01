import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import Navigation from '@components/navigation/navigation'
import { PresentationStack } from '@components/presentation'
import { SkillsStack } from '@components/skills'

export default function Default(){
    return(
        <Container fluid>
            <Row sx={{maxHeigth: '1500px'}}>
                <Navigation />
                <Col md='8'>
                    <Stack gap={5}>
                        <PresentationStack />
                        <SkillsStack />
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}