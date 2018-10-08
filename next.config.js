const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

module.exports = withSass(withTypescript());
