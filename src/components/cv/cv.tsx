import { Box, css, Stack, Text } from "@chakra-ui/react";
import {experiences, cv_skills,  languages, full_name, accounts, mail, phone} from "@assets/resume.json"
import { capitalize } from "../../helpers/string.helper";

export default function CV(){

    return(
        <Box bg='white' color={'black'}>
            <Text css={css({ "@media print": { display: "none" } })}>
                Insérer une explication ajout graphiques d'arrière plan + retirer en-têtes et pieds de page
            </Text>
            <Box bg='#008' paddingX='10' paddingY={2}>
                <Text color='white' fontSize={26} fontWeight='bolder'>Curriculum Vitae</Text>
            </Box>
            <Box display='flex' paddingTop={5}>
                <Stack w="30%" paddingX={6}>
                    <Text fontSize={18} fontWeight='500'>Données personnelles</Text>
                    <Stack spacing={0}>
                        <Text fontSize={16} fontWeight='500'>Nom</Text>
                        <Text fontSize={14}>{full_name}</Text>
                    </Stack>
                    <Stack spacing={0}>
                        <Text fontSize={16} fontWeight='500'>Téléphone</Text>
                        <Text fontSize={14}>{phone}</Text>
                    </Stack>
                    <Stack spacing={0}>
                        <Text fontSize={16} fontWeight='500'>Adresse e-mail</Text>
                        <Text fontSize={14}>{mail}</Text>
                    </Stack>
                    {accounts.map(item => (
                        <Stack spacing={0}>
                            <Text fontSize={16} fontWeight='500'>{capitalize(item.name)}</Text>
                            <Text fontSize={14}>{item.link}</Text>
                        </Stack>
                    ))}
                </Stack>
                <Box w="70%" bg='white' paddingX={10}>
                    <Stack spacing={5}>
                        <Stack>
                            <Text fontSize={20} fontWeight='500' borderBottom='1px'>Expériences</Text>
                            {experiences.filter(item => item.type === 'job').map(item => (
                                <Stack spacing={0}>
                                    <Text fontSize={16} fontWeight='600'>{item.place}</Text>
                                    <Text fontSize={14} fontWeight='500' fontStyle={"italic"}>de {item.from} à {item.to} - {item.role}</Text>
                                    <Text>{item.description}</Text>
                                </Stack>
                            ))}
                        </Stack>
                        <Stack>
                            <Text fontSize={20} fontWeight='500' borderBottom='1px'>Etudes</Text>
                            {experiences.filter(item => item.type === 'school').map(item => (
                                <Stack spacing={0}>
                                    <Text fontSize={16} fontWeight='600'>{item.place}</Text>
                                    <Text fontSize={14} fontWeight='500' fontStyle={"italic"}>{item.from} - {item.to}: {item.role}</Text>
                                    <Text>{item.description}</Text>
                                </Stack>
                            ))}
                        </Stack>
                        <Stack>
                            <Text fontSize={20} fontWeight='500' borderBottom='1px'>Compétences</Text>
                            <Stack spacing={0}>
                                {cv_skills.map(item => (
                                    <Text>
                                        <Text as={"span"} fontWeight='500'>{item.category}: </Text>
                                        {item.items.join(', ')}  
                                    </Text>
                                ))}
                            </Stack>
                        </Stack>
                        <Stack>
                            <Text fontSize={20} fontWeight='500' borderBottom='1px'>Langues</Text>
                            <Stack spacing={0}>
                                {languages.map(item => (
                                    <Box display='flex' justifyContent='space-between'>
                                        <Text>{item.name}</Text>
                                        <Text>{item.level}</Text>
                                    </Box>
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
            
        </Box>
    )
}