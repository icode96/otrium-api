import * as path from 'path'
import { createConnection, Connection } from 'typeorm'

const { MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD } = process.env

let instance: Connection

export const connect = async () => {
  instance = await createConnection({
    type: 'mysql',
    host: MYSQL_HOST,
    port: Number(MYSQL_PORT),
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    entities: [path.join(__dirname, '/../../**/*.entity.{js,ts}')],
    synchronize: true,
  })
}

export const connection = () => instance
