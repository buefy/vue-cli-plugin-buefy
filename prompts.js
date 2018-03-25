module.exports = [{
  name: `includeBuefy`,
  type: `list`,
  message: `Include buefy?`,
  choices: ['No', 'css', 'scss'],
  default: 0
},
{
  name: `materialDesignIcons`,
  type: `confirm`,
  message: 'Include Material Design Icons?',
  default: false
}]
