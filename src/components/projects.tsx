import {Box, Flex, Stack, Text} from "@chakra-ui/react";
import {projects} from "@assets/resume.json"

interface Project{
    group: string,
    icon: string,
    description: string,
}

export function ProjectsStack(){
    return(
        <Stack>
            <Text fontSize="lg">Side projects</Text>
            <Stack mt={5}>
                {projects.map(project => <ProjectItem key={project.group} project={project} />)}
            </Stack>
        </Stack>
    )
}

function ProjectItem({project}: {project: Project}){

    return(
        <Flex direction='row' rounded='md' boxShadow='md' gap={4} p={3} background='#1b1f25' border='1.5px solid #2a2e34'>
            <Box rounded="md" minW='35px' minH='35px' display={'flex'} alignItems='center' justifyContent='center' background='#424a56'>
                <Text as="i" className={project.icon}></Text>
            </Box>
            <Stack direction={{base:'column', md:'row'}} alignItems={{base:'start', md:'center'}} ml={2} flex={5} gap={0}>
                <Text mr={4} fontSize='sm' color='#bbbfc5' fontWeight='bold'>{project.group}</Text>
                <Text fontSize='xs' color='#91959d'>{project.description}</Text>
            </Stack>
        </Flex>
    )
}