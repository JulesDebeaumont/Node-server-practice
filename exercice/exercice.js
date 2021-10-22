require('dotenv').config()

const chalk = require('chalk')
const http = require('http')
const { calculateFunctionTime } = require('./utils/calcFuncExe')
const { getFileStats, getFilePathInformations, getFileContent, createFile, appendFileContent } = require('./utils/fileActions')
const { createFolder } = require('./utils/folderActions')
const hostName = process.env.HOST
const port = process.env.PORT
const userId = process.env.USER_ID
const fileTest = './test.txt'
const contentForFileCreation = "I'm the new content!"
const contentForFileAppend = "\nThis is new isn't it.. ?"
const folderForCreation = './new'

let visitor = 0



/**
 * Création du serveur
 */
const server = http.createServer((req, res) => {
    const upTime = Math.floor(process.uptime())
    const message = `Hello World!\nServer has been running for ${upTime} seconds.\nUser id : ${userId}\nVisitor count: ${visitor}`
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end(message)
})


/**
 * Lancement du serveur
 */
server.listen(port, hostName, () => {
    console.log(chalk.yellow(`\n-- Server running at http://${hostName}:${port}/ --\n`))
})


/**
 * Déclenchement d'événement lors d'une connection sur le server
 */
server.on('connection', () => {
    visitor += 1
    if (visitor >= 5) {
        console.log(chalk.bgRedBright('Visitor count reached 5! Shutting down the server...'))
        process.exit()
    }
    console.log(chalk.blueBright(`Visitor count is now : ${visitor}`))
    // console.trace()
})


/**
 * Calcul un nombre x10
 * @param {integer} number 
 * @returns {integer}
 */
const numberTimesTen = (number) => {
    return number * 10
}

calculateFunctionTime(numberTimesTen)
getFileStats(fileTest)
getFilePathInformations(fileTest)
getFileContent(fileTest)
createFile(fileTest, contentForFileCreation)
appendFileContent(fileTest, contentForFileAppend)
createFolder(folderForCreation)
checkIfFolderExist(folderForCreation)
