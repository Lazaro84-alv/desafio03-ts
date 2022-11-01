import { Box, Center, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from './AppContext';

export const Header = () => {
  const context = useContext(AppContext)

  console.log(context)

  return (
    <Box>
      <Center backgroundColor='orange' padding='5px'>
        <Text fontSize='3xl'>Dio Bank</Text>
      </Center>
    </Box>
  )
}