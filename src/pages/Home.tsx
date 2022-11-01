import { Box, Center, Input} from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from '../components/Card';
import DButton from '../components/DButton';
import { login } from '../services/login';

const Home = () => {
  const [ email, setEmail ] = useState<string>('');

  return (
    <Box padding='25px'>
      <Card>
        <Center>
          <h1>Faça o login</h1>
          </Center>
            <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder="password" />
          <Center>
            <DButton 
              onClick={() => login(email)}
            />
        </Center>
      </Card>
    </Box>
  )
}

export default Home;