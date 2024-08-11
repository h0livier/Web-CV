import {Link, Stack, Text} from "@chakra-ui/react";
import {accounts} from "@assets/resume.json"

export default function Contact(){

    return(
        <Stack>
            <Text fontSize="lg">Get in touch</Text>
            <Stack mt={5} mb={20}>
                <Text>Email me at olivier.hayot.dev@gmail.com or follow me via my social links</Text>
                <Stack mt={4} direction='row' divider={<Text as="span" mx={3}>/</Text>}>
                    {accounts.map(account => (
                        <Link href={account.link}>{account.name}</Link>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}