import {Stack, Text} from "@chakra-ui/react";
import {experiences} from "@assets/resume.json"

interface Experience{
    place: string,
    role: string,
    description: string,
    from: string,
    to: string
    type: string,
    short_place: string,
}

export default function Experiences() {

    return (
        <Stack>
            <Text fontSize="lg">Experiences and Education</Text>
            <Stack mt={5}>
                {experiences.map(experience => <Experience key={experience.place} experience={experience} />)}
            </Stack>
        </Stack>
    )

}

function Experience({experience}: {experience: Experience}){
    return(
        <Stack direction='row' alignItems='center' boxShadow='md' rounded='md' p={3} background='#1b1f25' border='1.5px solid #2a2e34'>
            <Stack flex={5} gap={0} flexDirection={{base: "column", md:"row"}}>
                <Text mr={4} fontSize='sm' color='#bbbfc5' fontWeight='bold'>{experience.place}</Text>
                <Text fontSize='sm' color='#91959d'>{experience.role}</Text>
            </Stack>
            <Text fontSize='xs' color='#91959d' fontStyle='italic'>{experience.from} - {experience.to}</Text>
        </Stack>
    )
}