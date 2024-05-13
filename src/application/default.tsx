import { Col, Container, Row, Stack } from 'react-bootstrap'
import { PresentationStack } from '@components/presentation'
import Navigation from "@components/navigation/navigation.tsx";

export default function Default(){
    return(
        <Container fluid id='main-container'>
            <Row>
                <Col>
                    <Stack>
                        <Navigation />
                        <PresentationStack />
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}