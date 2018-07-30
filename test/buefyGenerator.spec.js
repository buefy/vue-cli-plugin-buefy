const generateWithPlugin = require('./utils/generateWithPlugin')

describe('buefy', () => {
  it('should have the buefy property in the package.json', async () => {
    const { pkg } = await generateWithPlugin({
      id: 'buefy',
      apply: require('../generator'),
      options: {}
    })

    expect(pkg.dependencies).toHaveProperty('buefy')
  })

  it('should have sass-loader and node-sass packages', async () => {
    const { pkg } = await generateWithPlugin({
      id: 'buefy',
      apply: require('../generator'),
      options: {
        addStyle: 'scss'
      }
    })

    expect(pkg.devDependencies).toHaveProperty('node-sass')
    expect(pkg.devDependencies).toHaveProperty('sass-loader')
  })
})
