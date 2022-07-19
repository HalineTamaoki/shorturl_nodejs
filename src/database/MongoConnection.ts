import { config } from '../config/Constants'

const mongoose = require('mongoose')

export class MongoConnection {
    public async connect():Promise<void>{
        try {
            const connectionParams = {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }

            mongoose.connect(`${config.MONGO_CONNECTION}`, connectionParams)
            console.log('connected to database')            

        } catch (error) {
            console.error('fail to connect to database')
            process.exit(1)
        }
}
}