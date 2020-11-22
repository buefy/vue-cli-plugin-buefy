module.exports = (api, options) => {
  // extend package
  api.extendPackage({
    dependencies: {
      'buefy': '^0.9.0'
    }
  })

  let buefyLines = `\nimport Buefy from 'buefy'`
  if (options.addStyle === 'css') {
    buefyLines += `\nimport 'buefy/dist/buefy.css'`
  } else if (options.addStyle === 'scss') {
    api.extendPackage({
      devDependencies: {
        'node-sass': '^4.9.0',
        'sass-loader': '^7.0.1'
      }
    })

    api.render('./templates/style')
    buefyLines += `\nimport './assets/scss/app.scss'`
  }

  // use Buefy
  buefyLines += `\n\nVue.use(Buefy)`

  api.onCreateComplete(() => {
    // inject to main.js
    const fs = require('fs')
    const ext = api.hasPlugin('typescript') ? 'ts' : 'js'
    const mainPath = api.resolve(`./src/main.${ext}`)

    // get content
    let contentMain = fs.readFileSync(mainPath, { encoding: 'utf-8' })
    const lines = contentMain.split(/\r?\n/g).reverse()

    // inject import
    const lastImportIndex = lines.findIndex((line) => line.match(/^import/))
    lines[lastImportIndex] += buefyLines

    // modify app
    contentMain = lines.reverse().join('\n')
    fs.writeFileSync(mainPath, contentMain, { encoding: 'utf-8' })

    if (options.materialDesignIcons || options.fontAwesomeIcons) {
      const indexPath = api.resolve('./public/index.html')
      let contentIndex = fs.readFileSync(indexPath, { encoding: 'utf8' })

      const lines = contentIndex.split(/\r?\n/g).reverse()
      const lastLink = lines.findIndex((line) => line.match(/^\s*<link/))

      if (options.materialDesignIcons) {
        lines[lastLink] += `\n<link rel="stylesheet" href="//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css">`
      }
      if (options.fontAwesomeIcons) {
        lines[lastLink] += `\n<script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js" integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ" crossorigin="anonymous"></script>`
      }

      contentIndex = lines.reverse().join('\n')
      fs.writeFileSync(indexPath, contentIndex, { encoding: 'utf8' })
    }
  })
}
