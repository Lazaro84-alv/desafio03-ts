const conta = {
  email: 'picles@dio.bank',
  password: '123456',
  name: 'Picles Almeida'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})