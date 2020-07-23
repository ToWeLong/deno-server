import { configs } from "./types.ts"

const config:configs  = {
    database:{
        dbName:'test',
        host:'localhost',
        port:3306,
        user:'root',
        password:'123456789'
    },
    security:{
        secretKey:"md5afwe",
        expiresIn:60*60*24*30
    }
}
export default config
