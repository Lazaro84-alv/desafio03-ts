import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";
import { AppContext } from "../components/AppContext";
import CardInfo from "../components/CardInfo";
interface UserData {
  id: string;
  email: string,
  password: string,
  name: string,
  balance: number,
}

const Conta = () => {
  const [ userData, setUserData ] = useState<null | UserData>();
  const { id } = useParams()
  const navigate = useNavigate()

  const { isLoggedIn } = useContext(AppContext)

  !isLoggedIn && navigate('/')

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }

    getData()
  }, [])

  const actualData = new Date()


  if(userData && id !== userData.id) {
    navigate('/')
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {
          userData === undefined || userData === null ?
          (
            <Center>
              <Spinner size="xl" color="white" />
            </Center>
          ) :
          (
            <>
              <CardInfo 
                mainContent={`Bem vindo ${userData?.name}`} 
                content={
                  `${actualData?.getDay()} / 
                  ${actualData?.getMonth()} / 
                  ${actualData?.getFullYear()} 
                  ${actualData?.getHours()}:
                  ${actualData?.getMinutes()}`} 
              />
              <CardInfo  mainContent="Saldo" content={`R$ ${userData.balance}`} />
            </>
          )
        }
      </SimpleGrid>
    </Center>
  )
}

export default Conta;