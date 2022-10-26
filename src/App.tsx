import React from 'react';
import { 
  ChakraProvider,
  Box,
  Button,
  Center,
  Input 
} from '@chakra-ui/react';
import { login } from './services/login';

function App() {
  return (
    <>
     <ChakraProvider>
        <Box minHeight='100vh'backgroundColor='#7047eb' padding='25px'>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
            <Center>
              <h1>Faça o Login</h1>
            </Center>
            <Input placeholder='email' />
            <Input placeholder='password' />
            <Center>
              <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                Entrar
              </Button>
            </Center>
          </Box>
        </Box>
     </ChakraProvider> 
    </>
  );
}

export default App;
