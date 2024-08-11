import Default from '@pages/default'
import "./styles/main.scss"
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {

    return (
        <ChakraProvider>
            <Default />
        </ChakraProvider>
    )
}
