module.exports = (api, options) => {
  const pkg = {
    dependencies: {
      'buefy': '^0.6.3'
    }
  }

  // extend package
  api.extendPackage(pkg)

  // basic templates
  api.render('./templstes/basic', { ...options })

  let buefyLines = `\nimport Buefy from 'buefy'`
  if (options.css) {
    buefyLines += `\nimport 'buefy/lib/buefy.css'`
  }

  // use Buefy
  buefyLines += `\n\nVue.use(Buefy)`

  api.onCreateComplete(() => {
    // inject to main.js
    const fs = require('fs')
    const mainPath = api.resolve('./src/main.js')

    // get content
    let contentMain = fs.readFileSync(mainPath, { encoding: 'utf-8' })
    const lines = contentMain.split(/\r?\n/g).reverse()

    // inject import
    const lastImportIndex = lines.findIndex((line) => line.match(/^import/))
    lines[lastImportIndex] += buefyLines

    // modify app
    contentMain = lines.reverse().join('\n')
    fs.writeFileSync(mainPath, contentMain, { encoding: 'utf-8' })

    if (options.materialDesignIcons) {
      const indexPath = api.resolve('./public/index.html')
      let contentIndex = fs.readFileSync(indexPath, { encoding: 'utf8' })

      const lines = contentIndex.split(/\r?\n/g).reverse()
      const lastLink = lines.findIndex((line) => line.match(/^\s*<link/))

      lines[lastLink] += `\n<link rel="stylesheet" href="//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css">`

      contentIndex = lines.reverse().join('\n')
      fs.writeFileSync(indexPath, contentIndex, { encoding: 'utf8' })
    }
  })
}
