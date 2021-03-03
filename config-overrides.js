const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@modules': 'src/modules',
    '@firebaseAlias': 'src/firebase',
    '@providers': 'src/providers',
    '@routes': 'src/routes',
    '@styles': 'src/styles',
    '@configs': 'src/configs',
  })(config);

  return config;
};
