
/**
 * @param dbName: 数据库名称
 * @param host: 数据库地址
 * @param port: 数据库端口号
 * @param user: 数据库用户名
 * @param password: 数据库密码
 */
interface mysql{
    dbName:string,
    host:string,
    port:number,
    user:string,
    password:string
}

interface security{
    secretKey:string,
    expiresIn:number
}

interface configs{
    database:mysql,
    security:security
}

export {
    configs
}