import {Box, Text, Flex, Heading, Tag} from "@chakra-ui/react";

export default function PresentationStack() {
    return(
        <Flex direction={{base: 'column', md:'row'}} justifyContent='space-around' alignItems="center">
            <Box>
                <Heading mt={{base: 5, md:0}} size='xl'>Hi, I'm Olivier 👋</Heading>
                <Text mt='35px' w={{base:'100%', md: '50%'}}>
                    Hello, I'm a <Text as="span" color="blue.400">Software Developer</Text> with <Text as="span" color="blue.400">a few years</Text> of web experience.
                    I am currently working with <Tag size='sm' variant='solid' colorScheme='blue'>Typescript</Tag> on <Tag size='sm' variant='solid' colorScheme='blue'>Next.js</Tag>
                    or <Tag size='sm' variant='solid' colorScheme='blue'>React.js</Tag> for front-end and <Tag size='sm' variant='solid' colorScheme='blue'>.Net Framework</Tag> for back-end.
                    Outside of work, i like to take a drink with friends and upgrading my home domotics.
                </Text>
            </Box>
        </Flex>
    )
}