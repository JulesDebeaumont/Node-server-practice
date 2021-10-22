const fs = require('fs')
const chalk = require('chalk')
const path = require('path')

/**
 * Affiche les informations d'un fichier dans la console
 * @param {string} filePath 
 * @returns {void}
 */
function getFileStats(filePath) {
  fs.stat(filePath, (error, stats) => {
    if (error) {
      console.log(chalk.redBright(error))
      return
    }

    const sentenceDisplay = `\nAll stats informations from the file ${filePath} :\n`
    const informationsDisplay = JSON.stringify(stats, null, 4)

    console.log(
      chalk.black.bgBlueBright(sentenceDisplay) +
      chalk.blueBright(informationsDisplay)
    )
  })
}


/**
 * Affiche les informations du chemin d'un fichier dans la console
 * @param {string} filePath 
 * @returns {void}
 */
function getFilePathInformations(filePath) {
  fs.stat(filePath, (error, stats) => {
    if (error) {
      console.log(chalk.redBright(error))
    }
    return
  })

  const sentenceDisplay = `\nAll path informations from the file ${filePath} :\n`
  const pathInformations = {}
  pathInformations.dirname = path.dirname(filePath)
  pathInformations.basename = path.basename(filePath)
  pathInformations.extname = path.extname(filePath)
  pathInformations.absolutePath = path.resolve(filePath)
  const pathInformationsDisplay = JSON.stringify(pathInformations, null, 4)

  console.log(
    chalk.black.bgMagenta(sentenceDisplay) +
    chalk.magenta(pathInformationsDisplay)
  )
}


/**
 * Affiche le contenu d'un fichier dans la console
 * @param {string} filePath 
 * @returns {void}
 */
function getFileContent(filePath) {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.log(error)
      return
    }

    const sentenceDisplay = `\nCurrent content of the file ${filePath} :\n`

    console.log(
      chalk.black.bgCyan(sentenceDisplay) +
      chalk.cyan(data)
    )
  })
}


/**
 * Créer un fichier ou modifie son contenu
 * @param {string} filePath 
 * @param {string} content 
 * @returns {void}
 */
 function createFile(filePath, content) {
  fs.writeFile(filePath, content, error => {
    if (error) {
      console.log(error)
      return
    }

    const sentenceDisplay = `\nFile ${filePath} has been created/updated successfully!\n`
    console.log(chalk.black.bgWhite(sentenceDisplay))
  })
}


/**
 * Ajoute du contenu à un fichier existant
 * @param {string} filePath 
 * @param {string} content
 * @returns {void} 
 */
function appendFileContent(filePath, content) {
  fs.appendFile(filePath, content, error => {
    if (error) {
      console.log(error)
      return
    }

    const sentenceDisplay = `\nContent of file${filePath} has been added successfully!\n`
    console.log(chalk.black.bgWhiteBright(sentenceDisplay))
  })
}


module.exports = { getFileStats, getFilePathInformations, getFileContent,  createFile, appendFileContent }
