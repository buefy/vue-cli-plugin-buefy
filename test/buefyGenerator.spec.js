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

  it('should add import buefy', async () => {
    const generator = await generateWithPlugin({
      id: 'buefy',
      apply: require('../generator'),
      options: {}
    })

    console.log(generator)
  })
})
