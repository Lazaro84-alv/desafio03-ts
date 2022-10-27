import { useEffect, useState } from 'react';
import { Box, Center, Input } from '@chakra-ui/react';
import { login } from '../services/login';
import { DButton } from './DButton';
import { api } from '../api';

export const Card = () => {
  const [ email, setEmail ] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data = await api
      console.log(data)
    }

    getData()
  })

  return (
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
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
    </Box>
  );
};


