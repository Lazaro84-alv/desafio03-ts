import { login } from './login';

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    setIsLoggedIn: mockSetIsLoggedIn
  })
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockNavigate
}))

describe('login', () => {

  const mockAlert = jest.fn()

  const mockEmail = 'picles@dio.me'

  it('Deve exibir um alert com boas vindas caso o email seja válido', async() => {
    const response = await login(mockEmail)
    //expect(response).toBeTruthy()
  })

  it('Não deve exibir a mensagem de baos vindas sem o email', async() => {
    await login(mockEmail)
    //expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
    expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
  })

  it('Deve exibir um erro caso o email seja inválido', async () => {
    const response = await login('email@invalido.com')
    expect(response).toBeFalsy()
  })
})