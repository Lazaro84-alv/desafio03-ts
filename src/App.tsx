import React from 'react';
import { ChakraProvider, Box} from '@chakra-ui/react';
import { Card } from './components/Card';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
     <ChakraProvider>
       <Layout>
          <Box minHeight='100vh' backgroundColor='#7047eb' padding='25px'>
            <Card />
          </Box>
        </Layout>
     </ChakraProvider> 
    </>
  );
}

export default App;
