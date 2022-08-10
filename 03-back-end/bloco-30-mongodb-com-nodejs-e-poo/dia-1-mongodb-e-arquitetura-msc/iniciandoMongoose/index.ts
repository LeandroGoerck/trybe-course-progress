import { connect } from 'mongoose';
const mongoAddress = 'localhost'
const mongoPort = '27017'
const mongoDBName = 'meuDb'


connect(`mongodb://${mongoAddress}:${mongoPort}/${mongoDBName}`, {
  useMongoClient: true
})
.then(() => {
  console.log('MongoDb Conectado')
})
.catch(() => {
  console.log('Erro de conexão')
})

const options = {
  user: 'user', // Usuário do banco de dados.
  pass: 'password' // senha do usuário do banco de dados.
  autoIndex: false, // Não cria index para cada inserção de dado no banco.
  dbName: 'model_example', // Define qual banco de dados vou utilizar.
};

connect('mongodb://localhost:27017/', options);
