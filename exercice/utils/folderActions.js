const fs = require('fs')
const chalk = require('chalk')


/**
 * Créer un dossier
 * @param {string} folderPath
 * @returns {void}
 */
function createFolder(folderPath) {
  fs.mkdir(folderPath, error => {
    if (error) {
      console.log(chalk.redBright(error))
      return
    }

    const sentenceDisplay = `\nFolder ${folderPath} has been created successfully!\n`

    console.log(chalk.black.bgGreenBright(sentenceDisplay))
  })
}


module.exports = { createFolder }
