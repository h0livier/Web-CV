
import PresentationStack from '@components/presentation'
import Navigation from "@components/navigation/navigation.tsx";
import {Container, Stack, Flex} from "@chakra-ui/react";
import {ProjectsStack} from "@components/projects.tsx";
import Experiences from "@components/experiences.tsx";
import Contact from "@components/contact.tsx";

export default function Default(){
    return(
        <Container minW='100%' background='#21252a' color='gray.200' py={5} id='main-container'>
            <Flex justifyContent='center'>
                <Stack w={{base: '95%', md: '80%', lg:'65%', xl:'50%'}} gap={'60px'}>
                    <Navigation />
                    <PresentationStack />
                    <Experiences />
                    <ProjectsStack />
                    <Contact />
                </Stack>
            </Flex>
        </Container>
    )
}