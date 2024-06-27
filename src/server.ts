import express from 'express'
import cors from 'cors'
import router from './routes'
import chalk from 'chalk';


const server = express()
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/', router)


server.listen(process.env.PORT || 3001 || 80, () => {
    console.log(chalk.green('\n\n ✅ servidor rodando ✅\n\n'));
})