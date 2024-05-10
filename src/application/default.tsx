import { Col, Container, Row, Stack } from 'react-bootstrap'
import { PresentationStack } from '@components/presentation'
import { SkillsStack } from '@components/skills'

export default function Default(){
    return(
        <Container fluid className='text-light' id='main-container'>
            <Row>
                <Col>
                    <Stack className='py-5 rounded'>
                        <PresentationStack />
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}