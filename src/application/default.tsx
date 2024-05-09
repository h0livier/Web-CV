import { Col, Container, Row, Stack } from 'react-bootstrap'
import Navigation from '@components/navigation/navigation'
import { PresentationStack } from '@components/presentation'
import { SkillsStack } from '@components/skills'

export default function Default(){
    return(
        <Container fluid className='text-light pt-5' id='main-container'>
            <Row>
                <Navigation />
                <Col id="scrollable" md='8' lg='8' xl='9'>
                    <Stack gap={4}>
                        <PresentationStack />
                        <SkillsStack />
                        <SkillsStack />
                        <SkillsStack />
                        <SkillsStack />
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}