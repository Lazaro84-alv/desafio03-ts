import { ChakraProvider } from '@chakra-ui/react';
import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Conta from './pages/Conta';
import ContaInfo from './pages/ContaInfo';

import Home from './pages/Home';

interface IAppContext {
  user: string
}

export const AppContext = createContext({} as IAppContext);

const AppContextProvider = ({ children }: any) => {
  const user = 'picles'

  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={<Conta />} />
            <Route path='/infoconta' element={<ContaInfo />} />
          </Routes>
        </Layout>
       </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;

