module.exports = [{
  name: `addStyle`,
  type: `list`,
  message: `Add Buefy style?`,
  choices: ['none', 'css', 'scss'],
  default: 0
},
{
  name: `materialDesignIcons`,
  type: `confirm`,
  message: 'Include Material Design Icons?',
  default: false
},
{
  name: `fontAwesomeIcons`,
  type: 'confirm',
  message: 'Include Font Awesome Icons?',
  default: false
}]
