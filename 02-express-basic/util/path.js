const path = require("path")

// module.exports = path.dirname(process.mainModule.filename)  // depreciated
module.exports = path.dirname(require.main.filename)