var fs = require('fs')
const dirFolder = '../file/'

try {
    if (!fs.existsSync(dirFolder)){
      fs.mkdirSync(dirFolder)
    }
  } catch (err) {
    console.error(err)
  }