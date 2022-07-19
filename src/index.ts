import express from "express";
import { URLControler } from "./controler/URLControler";
import { MongoConnection } from "./database/MongoConnection";

const app = express();

//configuração aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Conecta ao database
const database = new MongoConnection();
database.connect()

//Usando a API
const URLController = new URLControler()
app.post('/shorten', URLController.shorten)
app.get('/:hash', URLController.redirect)

//inicializa o servidor
app.listen(3000, ()=> {console.log('Aplicação executando na porta 3000');
});
